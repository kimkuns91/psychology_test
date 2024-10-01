'use client'

import {
  answersState,
  currentGroupState,
  currentIndexState,
  pageState,
  shuffledAImagesState,
  shuffledBImagesState,
} from '@/atom'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { PictureType } from '@/interface'
import axios from 'axios'

const QuestionPage: React.FC = () => {
  const [answers, setAnswers] = useRecoilState(answersState)
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupState)
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
  const [shuffledAImages, setShuffledAImages] =
    useRecoilState<PictureType[]>(shuffledAImagesState)
  const [shuffledBImages, setShuffledBImages] =
    useRecoilState<PictureType[]>(shuffledBImagesState)
  const [page, setPage] = useRecoilState(pageState)

  // 상태 초기화를 위한 useResetRecoilState 훅 사용
  const resetAnswers = useResetRecoilState(answersState)
  const resetCurrentGroup = useResetRecoilState(currentGroupState)
  const resetCurrentIndex = useResetRecoilState(currentIndexState)
  const resetShuffledAImages = useResetRecoilState(shuffledAImagesState)
  const resetShuffledBImages = useResetRecoilState(shuffledBImagesState)
  const resetPage = useResetRecoilState(pageState)

  const handleAnswer = async (answer: string) => {
    if (currentIndex === 59) {
      setAnswers({
        ...answers,
        [shuffledBImages[currentIndex - 30].id]: answer,
      })
      try {
        const res = await axios.post('/api/save', answers)
        if (res.status === 200) {
          console.log('답변 저장 성공')
          // 모든 상태를 초기화
          resetAnswers()
          resetCurrentGroup()
          resetCurrentIndex()
          resetShuffledAImages()
          resetShuffledBImages()
          resetPage()

          setPage('end')
        }
      } catch (error) {
        console.error(error)
      }
      return
    }

    if (currentIndex <= 29) {
      setAnswers({
        ...answers,
        [shuffledAImages[currentIndex].id]: answer,
      })
    } else if (currentIndex > 29) {
      setAnswers({
        ...answers,
        [shuffledBImages[currentIndex - 30].id]: answer,
      })
    }
    setCurrentIndex(currentIndex + 1)
    setPage('test') // 답변 후 다시 테스트 이미지 페이지로 전환
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center justify-center space-x-12">
        <span className="text-lg font-semibold text-purple-600">
          스트레스 받지 않음
        </span>

        {/* 버튼들 */}
        <div className="flex items-center justify-center space-x-12">
          <button
            onClick={() => handleAnswer('1')}
            className="w-20 h-20 border-4 border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500"
          ></button>
          <button
            onClick={() => handleAnswer('2')}
            className="w-16 h-16 border-4 border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500"
          ></button>
          <button
            onClick={() => handleAnswer('3')}
            className="w-14 h-14 border-4 border-gray-500 rounded-full focus:ring-2 focus:ring-gray-400"
          ></button>
          <button
            onClick={() => handleAnswer('4')}
            className="w-16 h-16 border-4 border-green-600 rounded-full focus:ring-2 focus:ring-green-500"
          ></button>
          <button
            onClick={() => handleAnswer('5')}
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

export default QuestionPage
