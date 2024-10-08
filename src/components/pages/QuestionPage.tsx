'use client'

import {
  answersState,
  currentGroupState,
  currentIndexState,
  pageState,
  shuffledAImagesState,
  shuffledBImagesState,
} from '@/atom'
import { useEffect, useRef } from 'react'
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

  // 마지막 응답 여부를 감지하는 ref
  const isLastAnswer = useRef(false)

  useEffect(() => {
    // 마지막 응답에서만 API 호출
    const saveAnswers = async () => {
      if (isLastAnswer.current) {
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
            setPage('end')
            isLastAnswer.current = false // 플래그 리셋
          }
        } catch (error) {
          console.error('답변 저장 실패:', error)
        }
      }
    }

    saveAnswers()
  }, [answers, resetAnswers, resetCurrentGroup, resetCurrentIndex, resetShuffledAImages, resetShuffledBImages, setPage])

  const handleAnswer = (answer: string) => {
    if (currentIndex === 59) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [shuffledBImages[currentIndex - 30].id]: answer,
      }))
      isLastAnswer.current = true // 마지막 응답 플래그 설정
      return
    }

    if (currentIndex <= 29) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [shuffledAImages[currentIndex].id]: answer,
      }))
    } else if (currentIndex > 29) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [shuffledBImages[currentIndex - 30].id]: answer,
      }))
    }
    setCurrentIndex(currentIndex + 1)
    setPage('test') // 답변 후 다시 테스트 이미지 페이지로 전환
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col items-center space-y-12">
        <p className="text-3xl">
          방금 인스타그램 게시물을 보는 동안 당신의 스트레스 정도를 골라주세요.
        </p>
        <div className="flex items-center space-x-12 text-2xl">
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer('1')}
          >
            1. 전혀 스트레스 받지 않음
          </button>
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer('2')}
          >
            2. 스트레스를 받지 않음
          </button>
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer('3')}
          >
            3. 약간 스트레스 받음
          </button>
          <button
            className="hover:text-blue-400 transition-all duration-200"
            onClick={() => handleAnswer('4')}
          >
            4. 매우 스트레스 받음
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage
