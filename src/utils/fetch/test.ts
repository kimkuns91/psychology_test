'use server'

import prisma from '@/db'
import { Test } from '@prisma/client'

export const useFetchTest = async () => {
  try {
    const results = await prisma.test.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!results) {
      return null
    }

    return results as Test[]
  } catch (error) {
    return null
  }
}
