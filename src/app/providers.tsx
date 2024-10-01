'use client'

import ResetButton from '@/components/ResetButton'
import { cn } from '@/lib/utils'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'

interface Props {
  children?: React.ReactNode
}

const images = [
  '/images/practice.webp',
  '/images/profile_1.webp',
  '/images/profile_2.webp',
  '/images/a/1.png',
  '/images/a/2.png',
  '/images/a/3.png',
  '/images/a/4.png',
  '/images/a/5.png',
  '/images/a/6.png',
  '/images/a/7.png',
  '/images/a/8.png',
  '/images/a/9.png',
  '/images/a/10.png',
  '/images/a/11.png',
  '/images/a/12.png',
  '/images/a/13.png',
  '/images/a/14.png',
  '/images/a/15.png',
  '/images/a/16.png',
  '/images/a/17.png',
  '/images/a/18.png',
  '/images/a/19.png',
  '/images/a/20.png',
  '/images/a/21.png',
  '/images/a/22.png',
  '/images/a/23.png',
  '/images/a/24.png',
  '/images/a/25.png',
  '/images/a/26.png',
  '/images/a/27.png',
  '/images/a/28.png',
  '/images/a/29.png',
  '/images/a/30.png',
  '/images/b/1.png',
  '/images/b/2.png',
  '/images/b/3.png',
  '/images/b/4.png',
  '/images/b/5.png',
  '/images/b/6.png',
  '/images/b/7.png',
  '/images/b/8.png',
  '/images/b/9.png',
  '/images/b/10.png',
  '/images/b/11.png',
  '/images/b/12.png',
  '/images/b/13.png',
  '/images/b/14.png',
  '/images/b/15.png',
  '/images/b/16.png',
  '/images/b/17.png',
  '/images/b/18.png',
  '/images/b/19.png',
  '/images/b/20.png',
  '/images/b/21.png',
  '/images/b/22.png',
  '/images/b/23.png',
  '/images/b/24.png',
  '/images/b/25.png',
  '/images/b/26.png',
  '/images/b/27.png',
  '/images/b/28.png',
  '/images/b/29.png',
  '/images/b/30.png',
]

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
      <Head>
        {images.map((image) => (
          <link key={image} rel="preload" href={image} as="image" />
        ))}
      </Head>
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
