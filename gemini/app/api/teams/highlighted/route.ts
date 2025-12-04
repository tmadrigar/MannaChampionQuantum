
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const highlightedTeams = await prisma.team.findMany({
      where: { isHighlighted: true },
      orderBy: { averageScore: 'desc' },
      take: 6
    })

    return NextResponse.json({ teams: highlightedTeams })
  } catch (error) {
    console.error('Error fetching highlighted teams:', error)
    return NextResponse.json(
      { error: 'Failed to fetch highlighted teams' },
      { status: 500 }
    )
  }
}
