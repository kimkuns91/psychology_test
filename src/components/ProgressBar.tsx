import { useEffect, useState } from 'react'

interface ProgressBarProps {
  duration: number // 총 진행 시간 (초)
  onComplete: () => void // 시간이 완료되었을 때 호출할 함수
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, onComplete }) => {
  const [progress, setProgress] = useState(100) // 퍼센트로 진행 상황 관리
  const [startTime, setStartTime] = useState<number | null>(null) // 시작 시간 추적

  useEffect(() => {
    setStartTime(Date.now()) // 시작 시간 기록

    const interval = setInterval(() => {
      const timeElapsed = (Date.now() - (startTime ?? 0)) / 1000 // 경과 시간 (초)
      const newProgress = 100 - (timeElapsed / duration) * 100

      if (newProgress <= 0) {
        setProgress(0) // 0%로 설정
        clearInterval(interval)
        onComplete() // 시간이 완료되면 호출
      } else {
        setProgress(newProgress) // 퍼센트 업데이트
      }
    }, 50) // 짧은 간격으로 진행 업데이트 (50ms)

    return () => clearInterval(interval) // 컴포넌트 언마운트 시 타이머 정리
  }, [duration, onComplete, startTime])

  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="relative w-full bg-gray-200 h-2">
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500"
          style={{ width: `${progress}%`, transition: 'width 0.05s linear' }} // 진행 상황에 따른 너비 조정
        />
      </div>
    </div>
  )
}

export default ProgressBar
