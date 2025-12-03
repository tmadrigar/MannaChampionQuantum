import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const state = searchParams.get('state') || ''
    const city = searchParams.get('city') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12') // O frontend pedirá mais

    const skip = (page - 1) * limit

    const where: any = {}

    if (search) {
      where.OR = [
        { name: { contains: search } }, // Removido mode insensitive para SQLite se necessário, mas pode manter se usar Postgres
        { city: { contains: search } },
        { state: { contains: search } },
        { mentorProfessor: { contains: search } }
      ]
    }

    if (category && category !== 'all') where.category = category
    if (state && state !== 'all') where.state = state
    if (city && city !== 'all') where.city = city

    const hasActiveFilters = 
      search || 
      (category && category !== 'all') || 
      (state && state !== 'all') || 
      (city && city !== 'all')

    const total = await prisma.team.count({ where })

    // LÓGICA DE ORDENAÇÃO ATUALIZADA
    let orderBy: any[] = []

    if (!hasActiveFilters) {
      // Sem filtros: Respeita a Lista VIP primeiro (customOrder crescente)
      // Depois ordena por nota (averageScore decrescente)
      orderBy = [
        { customOrder: 'asc' },
        { averageScore: 'desc' }
      ]
    } else {
      // Com filtros: Ordem alfabética para facilitar a busca
      orderBy = [
        { name: 'asc' }
      ]
    }

    const teams = await prisma.team.findMany({
      where,
      orderBy,
      skip,
      take: limit
    })

    return NextResponse.json({
      teams,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    })
  } catch (error) {
    console.error('Error fetching teams:', error)
    return NextResponse.json(
      { error: 'Failed to fetch teams' },
      { status: 500 }
    )
  }
}