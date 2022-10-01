import store from 'storejs'
import { VictoryPie } from 'victory'
import { HiClock, HiCalendar, HiCheckCircle } from 'react-icons/hi'
import { MdDelete, MdNote } from 'react-icons/md'

import { IQuizResult } from 'types/quiz'
import Box from 'components/Box'

import styles from './confirmQuiz.module.scss'

const ConfirmQuiz = () => {
  const storage = store.get('quizList')
  console.log(storage)
  return (
    <Box>
      <>
        {storage === undefined && <p>이전 퀴즈가 없습니다.</p>}
        {storage !== undefined && (
          <article className={styles.confirmContainer}>
            <header>
              <h3>이전 퀴즈</h3>
            </header>
            <ul className={styles.ulContainer}>
              {storage.map((v: IQuizResult, i: number) => {
                const key = `quizList${i}`
                const correct = v.data.filter((x) => x.isCorrect === true).length
                const data = [
                  { x: '정답 수', y: correct },
                  { x: '총 퀴즈 개수', y: 10 },
                ]
                return (
                  <li key={key} className={styles.listContainer}>
                    <p className={styles.quiz}>quiz{v.id + 1}</p>
                    <header className={styles.inforContainer}>
                      <div>
                        <HiCalendar />
                        <span>{v.date}</span>
                      </div>
                      <div>
                        <HiClock />
                        <span>{v.time}</span>
                      </div>
                      <div>
                        <HiCheckCircle />
                        <span>{correct}/10</span>
                      </div>
                    </header>
                    <main className={styles.chartContainer}>
                      <VictoryPie
                        startAngle={90}
                        endAngle={450}
                        data={data}
                        colorScale={['#6878e1', '#dbdde6']}
                        width={270}
                        height={270}
                        padAngle={1}
                        innerRadius={115}
                        cornerRadius={8}
                        labels={() => ''}
                      />
                    </main>
                    <footer className={styles.btnContainer}>
                      <button type='button' className={styles.noteBtn}>
                        <MdNote />
                        <span>오답노트</span>
                      </button>
                      <button type='button' className={styles.deleteBtn}>
                        <MdDelete />
                        <span>삭제하기</span>
                      </button>
                    </footer>
                  </li>
                )
              })}
            </ul>
            <button type='button'>메인 화면으로 돌아가기</button>
          </article>
        )}
      </>
    </Box>
  )
}

export default ConfirmQuiz
