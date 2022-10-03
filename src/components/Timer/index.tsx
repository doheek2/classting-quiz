import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { timeState } from 'store/atom'
import styles from './timer.module.scss'

interface IProps {
  isTimerStop: boolean
}

const Timer = ({ isTimerStop }: IProps) => {
  const [time, setTime] = useRecoilState(timeState)

  useEffect(() => {
    const timer = (type: string, num: string) => {
      const temp = Number(num) + 1
      const tmpArr = [...time]
      if (temp < 10) {
        switch (type) {
          case 'min':
            tmpArr[0] = `0${temp}`
            break
          case 'sec':
            tmpArr[1] = `0${temp}`
            break
        }
      } else {
        switch (type) {
          case 'min':
            tmpArr[0] = String(temp)
            break
          case 'sec':
            tmpArr[1] = String(temp)
            break
        }
      }
      setTime(tmpArr)
    }

    const timeout = setTimeout(() => {
      if (time[1] === '59') {
        timer('min', time[0])
        const arr = [...time]
        arr[1] = '00'
        setTime(arr)
      } else {
        timer('sec', time[1])
      }
    }, 1000)

    if (isTimerStop) clearTimeout(timeout)
  }, [isTimerStop, setTime, time])

  return (
    <div className={styles.stopWatchContainer}>
      <span>{time[0]}</span>
      <span>:</span>
      <span>{time[1]}</span>
    </div>
  )
}

export default Timer
