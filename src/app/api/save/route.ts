import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/db'

export async function GET() {
  try {
    const results = await prisma.test.findMany()

    return NextResponse.json(results, {
      status: 200,
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error('오류:', error.message)
      return NextResponse.json(
        { error: 'Failed to process bookmark', details: error.message },
        { status: 500 },
      )
    } else {
      console.error('오류:', error)
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 },
      )
    }
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.json()
  try {
    const result = await prisma.test.create({
      data: {
        ...formData,
      },
    })
    console.log('result:', result)

    return NextResponse.json(
      { message: 'test completed' },
      {
        status: 200,
      },
    )
  } catch (error) {
    if (error instanceof Error) {
      console.error('북마크 처리 중 오류:', error.message)
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
