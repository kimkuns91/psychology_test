// 배열을 랜덤으로 섞는 함수
export const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5)
}
