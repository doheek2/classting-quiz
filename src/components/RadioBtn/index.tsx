import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useSetRecoilState } from 'recoil'
import { selectedAnswerState } from 'store/atom'

import styles from './radioBtn.module.scss'

interface IProps {
  i: number
  code: string
  correct: string
  isBtnCheckedList: boolean[]
  setIsBtnCheckedList: Dispatch<SetStateAction<boolean[]>>
  setIsShowBtn: Dispatch<SetStateAction<boolean>>
  setIsShowAnswer: Dispatch<SetStateAction<boolean>>
}

const RadioBtn = ({
  i,
  code,
  correct,
  isBtnCheckedList,
  setIsBtnCheckedList,
  setIsShowBtn,
  setIsShowAnswer,
}: IProps) => {
  const key = `answer${i}`
  const setSelectedAnswer = useSetRecoilState(selectedAnswerState)

  const radioBtnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== correct) setIsShowAnswer(true)
    else setIsShowAnswer(false)

    const arr = [...isBtnCheckedList]
    arr[Number(e.currentTarget.id)] = true
    setIsBtnCheckedList(arr)

    setIsShowBtn(true)
    setSelectedAnswer(e.currentTarget.value)
  }

  return (
    <label key={key} className={styles.radioContainer}>
      <input
        type='radio'
        name='quiz'
        id={`${i}`}
        value={code}
        onChange={radioBtnChangeHandler}
        checked={isBtnCheckedList[i]}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: code }} />
    </label>
  )
}

export default RadioBtn
