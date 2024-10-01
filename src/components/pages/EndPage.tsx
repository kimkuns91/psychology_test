'use client'

import { pageState } from '@/atom'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const EndPage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      setPage('start')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return <h1 className="text-3xl">실험이 종료되었습니다. 참여해주셔서 감사합니다.</h1>
}

export default EndPage
