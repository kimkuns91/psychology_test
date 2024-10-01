'use client'

import { pageState, shuffledAImagesState, shuffledBImagesState } from '@/atom'
import { picturesA, picturesB } from '@/lib/constants'

import { shuffleArray } from '@/utils/shuffleArray'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const StartPage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)
  const [shuffledAImages, setShuffledAImages] =
    useRecoilState(shuffledAImagesState)
  const [shuffledBImages, setShuffledBImages] =
    useRecoilState(shuffledBImagesState)

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      setPage('practice')
      if (shuffledAImages.length === 0) {
        const shuffledA = shuffleArray([...picturesA.map((p) => p)])
        setShuffledAImages(shuffledA)
      }

      if (shuffledBImages.length === 0) {
        const shuffledB = shuffleArray([...picturesB.map((p) => p)])
        setShuffledBImages(shuffledB)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return <h1 className="text-3xl">준비가 되면 스페이스 바를 눌러주세요.</h1>
}

export default StartPage
