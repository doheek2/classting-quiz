import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { VictoryPie } from 'victory'

import { solveQuizListState, timerMinState, timerSecState } from 'store/atom'
import Box from 'components/Box'

import styles from './resultQuiz.module.scss'
import Label from 'components/Label'

const ResultQuiz = () => {
  const navigate = useNavigate()
  const solveQuizList = useRecoilValue(solveQuizListState)
  const min = useRecoilValue(timerMinState)
  const sec = useRecoilValue(timerSecState)

  const correctList = solveQuizList.filter((v) => v.isCorrect === true)

  const data = [
    { x: '정답 수', y: correctList.length },
    { x: '오답 수', y: 10 - correctList.length },
  ]

  const homeBtnClickHandler = () => navigate('/')

  return (
    <Box>
      <article className={styles.resultContainer}>
        <main className={styles.chartContainer}>
          <VictoryPie
            startAngle={90}
            endAngle={450}
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
            <Label color='#2a303f' name='소요 시간' text={`${min}분 ${sec}초`} />
            <Label color='#b7bbea' name='정답 개수' text={`${data[0].y}개`} />
            <Label color='#e4e9fe' name='오답 개수' text={`${data[1].y}개`} />
          </ul>
          <button type='button' onClick={homeBtnClickHandler}>
            메인 화면으로 돌아가기
          </button>
        </footer>
      </article>
    </Box>
  )
}

export default ResultQuiz
