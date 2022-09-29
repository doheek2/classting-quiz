import { ChangeEvent } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { isShowAnswerState, isShowBtnState, quizListState, selectedAnswerState } from 'store/atom'

import styles from './radioBtn.module.scss'

interface IProps {
  i: number
  code: string
  quizNum: number
}

const RadioBtn = ({ i, code, quizNum }: IProps) => {
  const key = `answer${i}`
  const quizList = useRecoilValue(quizListState)
  const [isShowBtn, setIsShowBtn] = useRecoilState(isShowBtnState)
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(selectedAnswerState)
  const setIsShowAnswer = useSetRecoilState(isShowAnswerState)

  const radioBtnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.currentTarget.value)

    if (selectedAnswer !== quizList[quizNum].correct_answer) setIsShowAnswer(true)
    else setIsShowAnswer(false)

    setIsShowBtn(true)
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
