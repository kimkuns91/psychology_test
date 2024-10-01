'use client'

import { answersState, currentIndexState, pageState } from '@/atom'

import { useRecoilState } from 'recoil'

const PracticeQuestionPage: React.FC = () => {
  const [answers, setAnswers] = useRecoilState(answersState)
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
  const [page, setPage] = useRecoilState(pageState)

  const handleAnswer = () => {
    setPage('intro') // 답변 후 다시 테스트 이미지 페이지로 전환
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center justify-center space-x-12">
        {/* "그렇다" 텍스트 */}
        <span className="text-lg font-semibold text-purple-600">
          스트레스 받지 않음
        </span>

        {/* 버튼들 */}
        <div className="flex items-center justify-center space-x-12">
          <button
            onClick={() => handleAnswer()}
            className="w-20 h-20 border-4 border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500"
          ></button>
          <button
            onClick={() => handleAnswer()}
            className="w-16 h-16 border-4 border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500"
          ></button>
          <button
            onClick={() => handleAnswer()}
            className="w-14 h-14 border-4 border-gray-500 rounded-full focus:ring-2 focus:ring-gray-400"
          ></button>
          <button
            onClick={() => handleAnswer()}
            className="w-16 h-16 border-4 border-green-600 rounded-full focus:ring-2 focus:ring-green-500"
          ></button>
          <button
            onClick={() => handleAnswer()}
            className="w-20 h-20 border-4 border-green-600 rounded-full focus:ring-2 focus:ring-green-500"
          ></button>
        </div>

        {/* "그렇지 않다" 텍스트 */}
        <span className="text-lg font-semibold text-green-600">
          스트레스 받음
        </span>
      </div>
    </div>
  )
}

export default PracticeQuestionPage
