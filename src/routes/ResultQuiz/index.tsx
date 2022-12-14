import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { VictoryPie } from 'victory'
import store from 'storejs'
import dayjs from 'dayjs'
import cx from 'classnames'

import { solveQuizListState, timeState } from 'store/atom'
import Box from 'components/Box'
import Label from 'components/Label'
import Modal from 'components/Modal'

import styles from './resultQuiz.module.scss'

const ResultQuiz = () => {
  const navigate = useNavigate()
  const [startAngle, setStartAngle] = useState(0)
  const [endAngle, setEndAngle] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(false)

  const solveQuizList = useRecoilValue(solveQuizListState)
  const time = useRecoilValue(timeState)

  const correctList = solveQuizList.filter((v) => v.isCorrect === true)

  const data = [
    { x: '정답 수', y: correctList.length },
    { x: '오답 수', y: 10 - correctList.length },
  ]

  useEffect(() => {
    setStartAngle(90)
    setEndAngle(450)
  }, [])

  const homeBtnClickHandler = () => navigate('/')

  const saveBtnClickHandler = () => {
    const storage = store.get('quizList')

    const storageObj = {
      date: dayjs().format('YY-MM-DD'),
      time: `${time[0]}:${time[1]}`,
      data: solveQuizList,
    }

    if (storage === undefined) {
      store.set('quizList', [{ id: 0, ...storageObj }])
    } else {
      const obj = { id: storage[storage.length - 1].id + 1, ...storageObj }
      store.set('quizList', [...storage, obj])
    }

    setIsModalOpen(true)
    setIsSaveBtnDisabled(true)
  }

  const modalCloseBtnClickHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <Box>
      <>
        <article className={styles.resultContainer}>
          <main className={styles.chartContainer}>
            <VictoryPie
              animate={{
                duration: 2000,
              }}
              startAngle={startAngle}
              endAngle={endAngle}
              data={data}
              colorScale={['#b7bbea', '#e4e9fe']}
              height={400}
              padAngle={1}
              innerRadius={120}
              cornerRadius={5}
              labels={() => ''}
            />
          </main>
          <footer className={styles.inforContainer}>
            <ul>
              <Label color='#2a303f' name='소요 시간' text={`${time[0]}분 ${time[1]}초`} />
              <Label color='#2a303f' name='총 퀴즈 개수' text='10개' />
              <Label color='#b7bbea' name='정답 개수' text={`${data[0].y}개`} />
              <Label color='#e4e9fe' name='오답 개수' text={`${data[1].y}개`} />
            </ul>
            <div className={styles.btnContainer}>
              <button type='button' className={cx(styles.homeBtn, styles.btn)} onClick={homeBtnClickHandler}>
                메인 화면으로 돌아가기
              </button>
              <button
                type='button'
                className={cx(styles.btn, styles.saveBtn, isSaveBtnDisabled && styles.disabledBtn)}
                onClick={saveBtnClickHandler}
                disabled={isSaveBtnDisabled}
              >
                퀴즈 저장하기
              </button>
            </div>
          </footer>
        </article>
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <>
              <p className={styles.modalText}>퀴즈를 저장하였습니다.</p>
              <button type='button' className={styles.modalBtn} onClick={modalCloseBtnClickHandler}>
                확인
              </button>
            </>
          </Modal>
        )}
      </>
    </Box>
  )
}

export default ResultQuiz
