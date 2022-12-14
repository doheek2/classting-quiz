import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'

import { getQuizList } from 'utils/api'
import { selectedAnswerState, solveQuizListState } from 'store/atom'
import { IQuizList } from 'types/quiz'

import Box from 'components/Box'
import LoaderIcon from 'components/LoaderIcon'
import Timer from 'components/Timer'
import RadioBtn from 'components/RadioBtn'

import styles from './solveQuiz.module.scss'

const SolveQuiz = () => {
  const navigate = useNavigate()
  const selectedAnswer = useRecoilValue(selectedAnswerState)
  const [solveQuizList, setSolveQuizList] = useRecoilState(solveQuizListState)

  const [quizList, setQuizList] = useState<IQuizList>([])
  const [answerList, setAnswerList] = useState<string[]>([])
  const [quizNum, setQuizNum] = useState(0)
  const [isTimerStop, setIsTimerStop] = useState(false)
  const [isShowBtn, setIsShowBtn] = useState(false)
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const [isBtnCheckedList, setIsBtnCheckedList] = useState([false, false, false, false])

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
    setIsBtnCheckedList([false, false, false, false])

    if (quizNum !== 9) {
      setQuizNum((prev) => prev + 1)
      setIsShowBtn(false)
      setIsShowAnswer(false)
    } else {
      setIsTimerStop(true)
      navigate('/resultQuiz')
    }
  }

  const stringToHTML = (code: string, type: string, i = 0) => {
    if (type === 'answer') {
      return (
        <RadioBtn
          i={i}
          code={code}
          correct={quizList[quizNum].correct_answer}
          isBtnCheckedList={isBtnCheckedList}
          setIsBtnCheckedList={setIsBtnCheckedList}
          setIsShowBtn={setIsShowBtn}
          setIsShowAnswer={setIsShowAnswer}
        />
      )
    }
    if (type === 'correct') {
      // eslint-disable-next-line react/no-danger
      return <p dangerouslySetInnerHTML={{ __html: `??????: ${code}` }} />
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
              <Timer isTimerStop={isTimerStop} />
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
                {!isShowAnswer && <p className={styles.correct}>???????????????! ????</p>}
                {isShowAnswer && (
                  <>
                    <p className={styles.incorrect}>???????????????! ????</p>
                    {stringToHTML(quizList[quizNum].correct_answer, 'correct')}
                  </>
                )}
                <button type='button' onClick={nextBtnClickHandler}>
                  {quizNum === 9 ? 'Results' : 'Next'}
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
