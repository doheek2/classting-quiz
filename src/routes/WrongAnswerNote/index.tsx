import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import Box from 'components/Box'

import styles from './wrongAnswerNote.module.scss'

const WrongAnswerNote = () => {
  const navigate = useNavigate()
  const goBackBtnClickHandler = () => navigate(-1)

  return (
    <Box>
      <article className={styles.noteContainer}>
        <button type='button' className={styles.goBackBtn} onClick={goBackBtnClickHandler}>
          <IoIosArrowBack />
          <span>이전 페이지</span>
        </button>
        <header>
          <h3>오답노트</h3>
        </header>
        <main>
          <p>글</p>
        </main>
      </article>
    </Box>
  )
}

export default WrongAnswerNote
