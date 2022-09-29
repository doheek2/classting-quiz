import { ChangeEvent } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isShowAnswerState, isShowBtnState, selectedAnswerState } from 'store/atom'

import styles from './radioBtn.module.scss'

interface IProps {
  i: number
  code: string
  correct: string
}

const RadioBtn = ({ i, code, correct }: IProps) => {
  const key = `answer${i}`
  const [isShowBtn, setIsShowBtn] = useRecoilState(isShowBtnState)
  const setSelectedAnswer = useSetRecoilState(selectedAnswerState)
  const setIsShowAnswer = useSetRecoilState(isShowAnswerState)

  const radioBtnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== correct) setIsShowAnswer(true)
    else setIsShowAnswer(false)

    setIsShowBtn(true)
    setSelectedAnswer(e.currentTarget.value)
  }

  return (
    <div key={key} className={styles.radioContainer}>
      <input type='radio' name='quiz' id={`${i}`} value={code} onChange={radioBtnChangeHandler} disabled={isShowBtn} />
      {/* eslint-disable-next-line react/no-danger */}
      <label htmlFor={`${i}`} dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  )
}

export default RadioBtn
