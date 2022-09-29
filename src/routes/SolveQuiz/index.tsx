import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { getQuizList } from 'utils/api'
import { isShowAnswerState, isShowBtnState, selectedAnswerState, solveQuizListState } from 'store/atom'

import Box from 'components/Box'
import LoaderIcon from 'components/LoaderIcon'
import Timer from 'components/Timer'
import RadioBtn from 'components/RadioBtn'

import styles from './solveQuiz.module.scss'
import { IQuizList } from 'types/quiz'

const SolveQuiz = () => {
  const selectedAnswer = useRecoilValue(selectedAnswerState)
  const [solveQuizList, setSolveQuizList] = useRecoilState(solveQuizListState)
  const [isShowBtn, setIsShowBtn] = useRecoilState(isShowBtnState)
  const [isShowAnswer, setIsShowAnswer] = useRecoilState(isShowAnswerState)

  const [quizList, setQuizList] = useState<IQuizList>([])
  const [answerList, setAnswerList] = useState<string[]>([])
  const [quizNum, setQuizNum] = useState(0)

  const nextBtnClickHandler = () => {
    const tmpArr = [...solveQuizList]
    const currentQuiz = quizList[quizNum]

    tmpArr.push({
      id: quizNum,
      category: currentQuiz.category,
      question: currentQuiz.question,
      answerList,
      correct_answer: currentQuiz.correct_answer,
      selected_answer: selectedAnswer,
      isCorrect: selectedAnswer === currentQuiz.correct_answer,
    })

    setSolveQuizList(tmpArr)
    setQuizNum((prev) => prev + 1)
    setIsShowBtn(false)
    setIsShowAnswer(false)
  }

  const stringToHTML = (code: string, type: string, i = 0) => {
    if (type === 'answer') {
      return <RadioBtn i={i} code={code} correct={quizList[quizNum].correct_answer} />
    }
    if (type === 'correct') {
      // eslint-disable-next-line react/no-danger
      return <p dangerouslySetInnerHTML={{ __html: `정답: ${code}` }} />
    }
    // eslint-disable-next-line react/no-danger
    return <p className={styles.question} dangerouslySetInnerHTML={{ __html: code }} />
  }

  useEffect(() => {
    const getQuizHandler = async () => {
      const quiz = await getQuizList()
      setQuizList(quiz)
    }
    getQuizHandler()
  }, [setQuizList])

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
        {quizList.length === 0 && <LoaderIcon />}
        {quizList.length !== 0 && (
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
                    {stringToHTML(quizList[quizNum].correct_answer, 'correct')}
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
