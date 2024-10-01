import prisma from '@/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const results = await prisma.test.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(results, {
      status: 200,
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error('결과 패치 중 오류:', error.message)
      return NextResponse.json(
        { error: 'Failed to process bookmark', details: error.message },
        { status: 500 },
      )
    } else {
      console.error('알 수 없는 오류:', error)
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 },
      )
    }
  }
}
