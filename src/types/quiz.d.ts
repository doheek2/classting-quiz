interface IQuiz {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: [string]
  question: string
  type: string
}

export interface IQuizList extends Array<IQuiz> {}
