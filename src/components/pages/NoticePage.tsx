'use client'

import { pageState } from '@/atom'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const NoticePage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      setPage('practiceQuestion')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <h1 className="text-3xl">
      인스타그램 게시물을 보는 동안 당신의 스트레스 정도를 골라주세요.
    </h1>
  )
}

export default NoticePage
