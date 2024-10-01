'use client'

import { pageState } from '@/atom'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const ExplainPage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      setPage('intro')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8">
        <Image
          className="rounded-xl"
          src="/images/profile_1.webp"
          alt="instagram"
          priority
          width={500}
          height={500}
        />
        <Image
          className="rounded-xl"
          src="/images/profile_2.webp"
          alt="instagram"
          priority
          width={500}
          height={500}
        />
      </div>
      <h1 className="text-3xl text-center leading-10">
        지금 보여드리는 인스타그램 프로필은 앞으로 보여드릴 인스타그램 게시물을
        작성한 당사자입니다.
      </h1>
      <h1 className="text-3xl text-center leading-10">
        이 계정은 공계 계정입니다.
      </h1>
    </div>
  )
}

export default ExplainPage
