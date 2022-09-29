import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useSetRecoilState } from 'recoil'

import { isShowAnswerState, isShowBtnState, timerMinState, timerSecState } from 'store/atom'

import Box from 'components/Box'
import styles from './main.module.scss'

const Main = () => {
  const navigate = useNavigate()
  const setMin = useSetRecoilState(timerMinState)
  const setSec = useSetRecoilState(timerSecState)
  const setIsShowBtn = useSetRecoilState(isShowBtnState)
  const setIsShowAnswer = useSetRecoilState(isShowAnswerState)

  const startBtnClickHandler = () => {
    setIsShowBtn(false)
    setIsShowAnswer(false)
    setMin('00')
    setSec('00')
    navigate('/solveQuiz')
  }

  return (
    <Box>
      <>
        <article className={styles.headerContainer}>
          <h3>quiztime</h3>
          <p>퀴즈 10문제를 풀어보세요!</p>
        </article>
        <article className={styles.buttonContainer}>
          <button type='button' onClick={startBtnClickHandler}>
            퀴즈 풀기
            <div>
              <FiArrowRight />
            </div>
          </button>
          <Link to='/confirmQuiz' className={styles.link}>
            이전 퀴즈 보러 가기
          </Link>
        </article>
      </>
    </Box>
  )
}

export default Main
