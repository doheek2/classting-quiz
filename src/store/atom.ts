import { atom } from 'recoil'
import { IResolveQuizList } from 'types/quiz'

export const isShowBtnState = atom({
  key: 'isShowBtnState',
  default: false,
})

export const isShowAnswerState = atom({
  key: 'isShowAnswerState',
  default: false,
})

export const solveQuizListState = atom<IResolveQuizList>({
  key: 'solveQuizListState',
  default: [],
})

export const selectedAnswerState = atom({
  key: 'selectedAnswerState',
  default: '',
})
