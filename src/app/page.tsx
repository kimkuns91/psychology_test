'use client'

import { pageState, shuffledAImagesState, shuffledBImagesState } from '@/atom'
import { useEffect, useState } from 'react'

import EndPage from '@/components/pages/EndPage'
import IntroPage from '@/components/pages/IntroPage'
import NoticePage from '@/components/pages/NoticePage'
import PracticeImagePage from '@/components/pages/PracticeImagePage'
import PracticePage from '@/components/pages/PracticePage'
import PracticeQuestionPage from '@/components/pages/PracticeQuestionPage'
import QuestionPage from '@/components/pages/QuestionPage'
import StartPage from '@/components/pages/StartPage'
import TestPage from '@/components/pages/TestPage'
import { useRecoilState } from 'recoil'

const Home: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState)
  const [isClient, setIsClient] = useState(false)

  // 클라이언트에서만 실행되도록 설정
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 클라이언트에서만 렌더링
  if (!isClient) {
    return null // 클라이언트 로드 전에는 아무것도 렌더링하지 않음
  }

  switch (page) {
    case 'start':
      return <StartPage />
    case 'practice':
      return <PracticePage />
    case 'practiceImage':
      return <PracticeImagePage />
    case 'notice':
      return <NoticePage />
    case 'practiceQuestion':
      return <PracticeQuestionPage />
    case 'intro':
      return <IntroPage />
    case 'question':
      return <QuestionPage />
    case 'test':
      return <TestPage />
    case 'end':
      return <EndPage />
    default:
      return <h1>알 수 없는 페이지 상태</h1>
  }
}

export default Home
