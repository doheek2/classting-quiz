import { MouseEvent, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import store from 'storejs'
import cx from 'classnames'

import Box from 'components/Box'
import GoBackBtn from 'components/GoBackBtn'
import { IQuizResultList } from 'types/quiz'

import styles from './wrongAnswerNote.module.scss'

const WrongAnswerNote = () => {
  const { state } = useLocation()
  const [selectedNum, setSelectedNum] = useState(0)
  const [isShowList, setIsShowList] = useState(false)

  const storage: IQuizResultList = store.get('quizList')
  const data = storage.filter((v) => v.id === Number(state))
  const selectedData = data[0].data[selectedNum]

  const quizBtnClickHandler = () => {
    setIsShowList((prev) => !prev)
  }

  const listBtnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedNum(Number(e.currentTarget.value))
    setIsShowList(false)
  }

  return (
    <Box>
      <article className={styles.noteContainer}>
        <GoBackBtn />
        <header className={styles.header}>
          <h3>오답노트{Number(state) + 1}</h3>
          <button type='button' className={styles.quizBtn} onClick={quizBtnClickHandler}>
            퀴즈{selectedNum + 1}
            {!isShowList && <IoIosArrowDown />}
            {isShowList && <IoIosArrowUp />}
          </button>
          <div className={styles.listBtnContainer}>
            {isShowList &&
              data[0].data.map((v, i) => {
                const key = `selectBtn${i}`
                return (
                  <button key={key} type='button' value={v.id} onClick={listBtnClickHandler}>
                    퀴즈{v.id + 1}
                  </button>
                )
              })}
          </div>
        </header>
        <main className={styles.contentsContainer}>
          {/* eslint-disable-next-line react/no-danger */}
          <p className={styles.question} dangerouslySetInnerHTML={{ __html: selectedData.question }} />
          {selectedData.answerList.map((v, i) => {
            const key = `selectedData${i}`
            const isSelected = v === selectedData.selected_answer
            const isCorrect = v === selectedData.correct_answer
            return (
              <div key={key} className={styles.answerContainer}>
                <span>{i + 1}. </span>
                <span
                  className={cx(
                    isSelected && styles.correct,
                    isSelected && !selectedData.isCorrect && styles.incorrect,
                    isCorrect && !selectedData.isCorrect && styles.correct
                  )}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: v }}
                />
              </div>
            )
          })}
          <div className={styles.resultContainer}>
            {selectedData.isCorrect && <p className={styles.correctResult}>정답입니다! 🎉</p>}
            {!selectedData.isCorrect && <p className={styles.incorrectResult}>오답입니다! 😥</p>}
          </div>
        </main>
      </article>
    </Box>
  )
}

export default WrongAnswerNote
