import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { FcVlc } from 'react-icons/fc'

import { isShowAnswerState, isShowBtnState, solveQuizListState, timerMinState, timerSecState } from 'store/atom'
import styles from './noQuiz.module.scss'

const NoQuiz = () => {
  const navigate = useNavigate()
  const setMin = useSetRecoilState(timerMinState)
  const setSec = useSetRecoilState(timerSecState)
  const setIsShowBtn = useSetRecoilState(isShowBtnState)
  const setIsShowAnswer = useSetRecoilState(isShowAnswerState)
  const setSolveQuizList = useSetRecoilState(solveQuizListState)

  const goQuizBtnClickHandler = () => {
    setSolveQuizList([])
    setMin('00')
    setSec('00')
    setIsShowBtn(false)
    setIsShowAnswer(false)
    navigate('/solveQuiz')
  }

  const goHomeBtnClickHandler = () => navigate('/')

  return (
    <article className={styles.noQuizContainer}>
      <div className={styles.iconContainer}>
        <FcVlc />
      </div>
      <p>이전에 푼 퀴즈가 없습니다.</p>
      <div className={styles.btnContainer}>
        <button type='button' className={styles.quizBtn} onClick={goQuizBtnClickHandler}>
          퀴즈 풀러 가기
        </button>
        <button type='button' className={styles.homeBtn} onClick={goHomeBtnClickHandler}>
          메인 화면으로 돌아가기
        </button>
      </div>
    </article>
  )
}

export default NoQuiz
