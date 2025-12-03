
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [categories, states, cities] = await Promise.all([
      prisma.team.groupBy({
        by: ['category'],
        _count: { category: true },
        orderBy: { category: 'asc' }
      }),
      prisma.team.groupBy({
        by: ['state'],
        _count: { state: true },
        orderBy: { state: 'asc' }
      }),
      prisma.team.groupBy({
        by: ['city'],
        _count: { city: true },
        orderBy: { city: 'asc' }
      })
    ])

    return NextResponse.json({
      categories: categories.map(c => ({ value: c.category, count: c._count.category })),
      states: states.map(s => ({ value: s.state, count: s._count.state })),
      cities: cities.map(c => ({ value: c.city, count: c._count.city }))
    })
  } catch (error) {
    console.error('Error fetching filter options:', error)
    return NextResponse.json(
      { error: 'Failed to fetch filter options' },
      { status: 500 }
    )
  }
}
