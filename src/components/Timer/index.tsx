import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { timerMinState, timerSecState } from 'store/atom'
import styles from './timer.module.scss'

const Timer = () => {
  const [min, setMin] = useRecoilState(timerMinState)
  const [sec, setSec] = useRecoilState(timerSecState)

  useEffect(() => {
    const timer = (type: string, time: string) => {
      const temp = Number(time) + 1
      if (temp < 10) {
        switch (type) {
          case 'min':
            setMin(`0${temp}`)
            break
          case 'sec':
            setSec(`0${temp}`)
            break
        }
      } else {
        switch (type) {
          case 'min':
            setMin(String(temp))
            break
          case 'sec':
            setSec(String(temp))
            break
        }
      }
    }

    setTimeout(() => {
      if (sec === '59') {
        timer('min', min)
        setSec('00')
      } else {
        timer('sec', sec)
      }
    }, 1000)
  }, [min, sec, setMin, setSec])

  return (
    <div className={styles.stopWatchContainer}>
      <span>{min}</span>
      <span>:</span>
      <span>{sec}</span>
    </div>
  )
}

export default Timer
