'use client'

import {
  answersState,
  currentGroupState,
  currentIndexState,
  pageState,
  shuffledAImagesState,
  shuffledBImagesState,
} from '@/atom'

import { usePathname } from 'next/navigation'
import { useResetRecoilState } from 'recoil'

const ResetButton: React.FC = () => {
  const pathname = usePathname()
  // 상태 초기화를 위한 useResetRecoilState 훅 사용
  const resetAnswers = useResetRecoilState(answersState)
  const resetCurrentGroup = useResetRecoilState(currentGroupState)
  const resetCurrentIndex = useResetRecoilState(currentIndexState)
  const resetShuffledAImages = useResetRecoilState(shuffledAImagesState)
  const resetShuffledBImages = useResetRecoilState(shuffledBImagesState)
  const resetPage = useResetRecoilState(pageState)

  const handleResetButton = () => {
    resetAnswers()
    resetCurrentGroup()
    resetCurrentIndex()
    resetShuffledAImages()
    resetShuffledBImages()
    resetPage()
    window.location.reload()
  }
  
  if (pathname === '/result') return null

  return (
    <button
      className="fixed bottom-10 right-10 m-4 p-4 bg-blue-500 text-white rounded-full"
      onClick={handleResetButton}
    >
      테스트 초기화
    </button>
  )
}

export default ResetButton
