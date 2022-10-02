import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useSetRecoilState } from 'recoil'
import { isShowAnswerState, isShowBtnState, selectedAnswerState } from 'store/atom'

import styles from './radioBtn.module.scss'

interface IProps {
  i: number
  code: string
  correct: string
  isBtnCheckedList: boolean[]
  setIsBtnCheckedList: Dispatch<SetStateAction<boolean[]>>
}

const RadioBtn = ({ i, code, correct, isBtnCheckedList, setIsBtnCheckedList }: IProps) => {
  const key = `answer${i}`
  const setIsShowBtn = useSetRecoilState(isShowBtnState)
  const setSelectedAnswer = useSetRecoilState(selectedAnswerState)
  const setIsShowAnswer = useSetRecoilState(isShowAnswerState)

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
