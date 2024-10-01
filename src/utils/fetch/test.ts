'use server'

import { Test } from '@prisma/client'
import prisma from '@/db'

export const useFetchTest = async () => {
  try {
    const results = await prisma.test.findMany()

    if (!results) {
      return null
    }

    return results as Test[]
  } catch (error) {
    return null
  }
}
