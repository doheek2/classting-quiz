import { useEffect, useState } from 'react'
import styles from './timer.module.scss'

const Timer = () => {
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')

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
  }, [min, sec])

  return (
    <div className={styles.stopWatchContainer}>
      <span>{min}</span>
      <span>:</span>
      <span>{sec}</span>
    </div>
  )
}

export default Timer
