interface IQuiz {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: [string]
  question: string
  type: string
}

export interface IQuizList extends Array<IQuiz> {}

interface IResolveQuiz {
  id: number
  category: string
  question: string
  answerList: string[]
  correct_answer: string
  selected_answer: string
  isCorrect: boolean
}

export interface IResolveQuizList extends Array<IResolveQuiz> {}

interface IQuizResult {
  data: [IResolveQuiz]
  date: string
  id: number
  time: string
}

export interface IQuizResultList extends Array<IQuizResult> {}
