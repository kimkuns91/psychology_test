'use client'

import ResetButton from '@/components/ResetButton'
import { cn } from '@/lib/utils'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'

interface Props {
  children?: React.ReactNode
}


export const NextProvider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      {children}
      <Toaster />
    </RecoilRoot>
  )
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <main
        className={cn(
          'relative bg-black text-white w-full min-h-screen flex flex-col items-center justify-center',
        )}
      >
        {children}
        <ResetButton />
      </main>
    </>
  )
}
