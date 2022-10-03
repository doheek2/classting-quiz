import { atom } from 'recoil'
import { IResolveQuizList } from 'types/quiz'

export const solveQuizListState = atom<IResolveQuizList>({
  key: 'solveQuizListState',
  default: [],
})

export const selectedAnswerState = atom({
  key: 'selectedAnswerState',
  default: '',
})

export const timeState = atom({
  key: 'timeState',
  default: ['00', '00'],
})
