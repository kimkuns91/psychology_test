import { PictureType } from '@/interface'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// 페이지 상태 관리 (start, practice, practiceImage, question, test)
export const pageState = atom<
  | 'start'
  | 'practice'
  | 'notice'
  | 'practiceQuestion'
  | 'explain'
  | 'intro'
  | 'practiceImage'
  | 'question'
  | 'test'
  | 'end'
>({
  key: 'pageState',
  default: 'start',
  effects_UNSTABLE: [persistAtom],
})

// 현재 보여지는 이미지의 인덱스 관리
export const currentIndexState = atom<number>({
  key: 'currentIndexState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
})

// A그룹과 B그룹의 이미지를 구분하는 상태
export const currentGroupState = atom<'A' | 'B'>({
  key: 'currentGroupState',
  default: 'A',
  effects_UNSTABLE: [persistAtom],
})

// 사용자가 입력한 답변을 저장하는 상태
export const answersState = atom<Record<number, string>>({
  key: 'answersState',
  default: {},
  effects_UNSTABLE: [persistAtom],
})

// 섞인 A그룹 이미지를 저장하는 상태
export const shuffledAImagesState = atom<PictureType[]>({
  key: 'shuffledAImagesState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

// 섞인 B그룹 이미지를 저장하는 상태
export const shuffledBImagesState = atom<PictureType[]>({
  key: 'shuffledBImagesState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
