'use client'

import { answersState, currentIndexState, pageState } from '@/atom'

import { useRecoilState } from 'recoil'

const PracticeQuestionPage: React.FC = () => {
  const [answers, setAnswers] = useRecoilState(answersState)
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
  const [page, setPage] = useRecoilState(pageState)

  const handleAnswer = () => {
    setPage('explain') // 답변 후 다시 테스트 이미지 페이지로 전환
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col items-center space-y-12">
        <p className="text-3xl">
          방금 인스타그램 스토리를 보는 동안 당신의 스트레스 정도를 골라주세요.
        </p>
        <div className="flex items-center space-x-12 text-2xl">
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer()}
          >
            1. 전혀 스트레스 받지 않음
          </button>
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer()}
          >
            2. 스트레스를 받지 않음
          </button>
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer()}
          >
            3.약간 스트레스 받음
          </button>
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer()}
          >
            4. 매우 스트레스 받음
          </button>
        </div>
      </div>
    </div>
  )
}

export default PracticeQuestionPage
