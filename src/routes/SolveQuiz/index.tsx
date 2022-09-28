import { ChangeEvent, useEffect, useState } from 'react'
import { useUnmount } from 'react-use'

import { IQuizList } from 'types/quiz'
import { getQuizList } from 'utils/api'

import Box from 'components/Box'
import LoaderIcon from 'components/LoaderIcon'
import Timer from 'components/Timer'

import styles from './solveQuiz.module.scss'

const SolveQuiz = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [quizList, setQuizList] = useState<IQuizList>([])
  const [answerList, setAnswerList] = useState<string[]>([])
  const [quizNum, setQuizNum] = useState(0)
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const [isShowBtn, setIsShowBtn] = useState(false)

  const nextBtnClickHandler = () => {
    setQuizNum((prev) => prev + 1)
    setIsShowBtn(false)
    setIsShowAnswer(false)
  }

  const radioBtnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAnswer = e.currentTarget.value
    if (selectedAnswer !== quizList[quizNum].correct_answer) {
      setIsShowAnswer(true)
    }
    setIsShowBtn(true)
  }

  const stringToHTML = (code: string, type: string, i = 0) => {
    if (type === 'answer') {
      const key = `answer${i}`
      return (
        <div key={key} className={styles.radioContainer}>
          <input
            type='radio'
            name='quiz'
            id={`${i}`}
            value={code}
            onChange={radioBtnChangeHandler}
            disabled={isShowBtn}
          />
          {/* eslint-disable-next-line react/no-danger */}
          <label htmlFor={`${i}`} dangerouslySetInnerHTML={{ __html: code }} />
        </div>
      )
    }
    // eslint-disable-next-line react/no-danger
    return <p className={styles.question} dangerouslySetInnerHTML={{ __html: code }} />
  }

  useUnmount(() => {
    const getQuizHandler = async () => {
      const quiz = await getQuizList()
      setQuizList(quiz)
      setIsLoading(true)
    }
    getQuizHandler()
  })

  useEffect(() => {
    if (quizList.length !== 0) {
      const currentQuiz = quizList[quizNum]
      const arr = [...currentQuiz.incorrect_answers, currentQuiz.correct_answer]
      const tmpArr = arr.sort(() => Math.random() - 0.5)
      setAnswerList(tmpArr)
    }
  }, [quizList, quizNum])

  return (
    <Box>
      <article className={styles.container}>
        {!isLoading && <LoaderIcon />}
        {isLoading && (
          <>
            <header>
              <h3>quiz {quizNum + 1}</h3>
              <Timer />
            </header>
            <progress value={quizNum + 1} max='10' />
            <main className={styles.quizContainer}>
              {stringToHTML(quizList[quizNum].question, 'question')}
              <fieldset>
                {answerList?.map((v, i) => {
                  return stringToHTML(v, 'answer', i)
                })}
              </fieldset>
            </main>
            {isShowBtn && (
              <footer>
                {!isShowAnswer && <p className={styles.correct}>정답입니다! 🎉</p>}
                {isShowAnswer && (
                  <>
                    <p className={styles.incorrect}>오답입니다! 😥</p>
                    <p>정답 : {quizList[quizNum].correct_answer}</p>
                  </>
                )}
                <button type='button' onClick={nextBtnClickHandler}>
                  Next
                </button>
              </footer>
            )}
          </>
        )}
      </article>
    </Box>
  )
}

export default SolveQuiz
