import {
  currentGroupState,
  currentIndexState,
  pageState,
  shuffledAImagesState,
  shuffledBImagesState,
} from '@/atom'

import Image from 'next/image'
import ProgressBar from '@/components/ProgressBar'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const TestPage: React.FC = () => {
  const [shuffledAImages] = useRecoilState(shuffledAImagesState)
  const [shuffledBImages] = useRecoilState(shuffledBImagesState)
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupState)
  const [page, setPage] = useRecoilState(pageState)

  const currentImages = currentGroup === 'A' ? shuffledAImages : shuffledBImages
  const currentImage =
    currentGroup === 'A'
      ? currentImages[currentIndex]
      : currentImages[currentIndex - 30]

  // 이미지가 끝나면 질문 페이지로 전환
  const handleProgressComplete = () => {
    if (currentIndex === 29) {
      setCurrentGroup('B')
    }
    setPage('question') // 질문 페이지로 전환
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <ProgressBar duration={10} onComplete={handleProgressComplete} />

      {currentImage ? (
        <Image
          src={currentImage.picture}
          alt="테스트 이미지"
          width={600}
          height={600}
          className="rounded-md"
        />
      ) : (
        <h1 className="text-2xl text-red-500">이미지를 로드할 수 없습니다.</h1>
      )}
    </div>
  )
}

export default TestPage
