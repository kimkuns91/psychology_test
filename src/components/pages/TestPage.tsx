import {
  currentGroupState,
  currentIndexState,
  pageState,
  shuffledAImagesState,
  shuffledBImagesState,
} from '@/atom'
import { useState } from 'react'

import ProgressBar from '@/components/ProgressBar'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

const TestPage: React.FC = () => {
  const [shuffledAImages] = useRecoilState(shuffledAImagesState)
  const [shuffledBImages] = useRecoilState(shuffledBImagesState)
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupState)
  const [page, setPage] = useRecoilState(pageState)
  
  // 이미지 로드 상태 관리
  const [imageLoaded, setImageLoaded] = useState(false)

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

  // 이미지 로드 핸들러
  const handleImageLoad = () => {
    setImageLoaded(true) // 이미지 로드가 완료되면 true로 설정
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      {/* 이미지가 로드되면 ProgressBar 시작 */}
      {imageLoaded && (
        <ProgressBar duration={10} onComplete={handleProgressComplete} />
      )}

      {currentImage ? (
        <Image
          src={currentImage.picture}
          alt="테스트 이미지"
          width={600}
          height={600}
          className="rounded-md"
          priority
          onLoad={handleImageLoad} // 이미지 로드 완료 핸들러
        />
      ) : (
        <h1 className="text-2xl text-red-500">이미지를 로드할 수 없습니다.</h1>
      )}
    </div>
  )
}

export default TestPage
