import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { FcVlc } from 'react-icons/fc'

import { solveQuizListState, timeState } from 'store/atom'
import styles from './noQuiz.module.scss'

const NoQuiz = () => {
  const navigate = useNavigate()
  const setTime = useSetRecoilState(timeState)
  const setSolveQuizList = useSetRecoilState(solveQuizListState)

  const goQuizBtnClickHandler = () => {
    setSolveQuizList([])
    setTime(['00', '00'])
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
