'use client'

import { pageState } from '@/atom';
import ProgressBar from '@/components/ProgressBar'; // 진행바 컴포넌트
import Image from 'next/image';
import { useRecoilState } from 'recoil';

const PracticeImagePage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)

  const handleProgressComplete = () => {
    setPage('notice')
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <ProgressBar duration={10} onComplete={handleProgressComplete} />
      <Image
        src="/images/practice.webp"
        alt="연습 이미지"
        width={600}
        height={600}
        className="rounded-md"
      />
    </div>
  )
}

export default PracticeImagePage
