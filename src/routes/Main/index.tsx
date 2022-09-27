import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import styles from './main.module.scss'

const Main = () => {
  const navigate = useNavigate()
  const startBtnClickHandler = () => navigate('/solveQuiz')

  return (
    <section className={styles.boxContainer}>
      <article className={styles.headerContainer}>
        <h3>quiztime</h3>
        <p>퀴즈 10문제를 풀어보세요!</p>
      </article>
      <article className={styles.buttonContainer}>
        <button type='button' onClick={startBtnClickHandler}>
          시작하기
          <div>
            <FiArrowRight />
          </div>
        </button>
        <Link to='/confirmQuiz' className={styles.link}>
          퀴즈기록 확인하러 가기
        </Link>
      </article>
    </section>
  )
}

export default Main
