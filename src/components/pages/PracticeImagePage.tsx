'use client'

import { pageState } from '@/atom';
import ProgressBar from '@/components/ProgressBar'; // 진행바 컴포넌트
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Spinner from '../Spinner';

const PracticeImagePage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)
  // 이미지 로드 상태 관리
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleProgressComplete = () => {
    setPage('notice')
  }
  // 이미지 로드 핸들러
  const handleImageLoad = () => {
    setImageLoaded(true) // 이미지 로드가 완료되면 true로 설정
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      {imageLoaded && (
        <ProgressBar duration={0.1} onComplete={handleProgressComplete} />
      )}
      {!imageLoaded && <Spinner />}
      <Image
        src="/images/practice.webp"
        alt="연습 이미지"
        width={600}
        height={600}
        className="rounded-md"
        priority
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default PracticeImagePage
