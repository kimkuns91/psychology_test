'use client'

import { pageState } from '@/atom'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const IntroPage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      setPage('test')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return <h1 className="text-3xl">지금부터 본 실험 시작입니다.</h1>
}

export default IntroPage
