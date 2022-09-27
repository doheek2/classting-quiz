import { useEffect, useState } from 'react'
import { IQuizList } from 'types/quiz'
import { getQuizList } from 'utils/api'

const SolveQuiz = () => {
  const [quizList, setQuizList] = useState<IQuizList>([])
  useEffect(() => {
    const getQuizHandler = async () => {
      const quiz = await getQuizList()
      setQuizList(quiz)
    }
    getQuizHandler()
  }, [setQuizList])

  return (
    <div>
      {quizList &&
        quizList.map((v, i) => {
          const key = `quiz${i}`
          return (
            <section key={key}>
              <p>category: {v.category}</p>
            </section>
          )
        })}
    </div>
  )
}

export default SolveQuiz
