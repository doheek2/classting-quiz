import { Dispatch, SetStateAction } from 'react'
import store from 'storejs'

import Modal from 'components/Modal'
import { IQuizResultList } from 'types/quiz'

import styles from './deleteBtnModal.module.scss'

interface IProps {
  num: number
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
const DeleteBtnModal = ({ num, setIsModalOpen }: IProps) => {
  const modalDeleteBtnClickHandler = () => {
    const storage: IQuizResultList = store.get('quizList')
    const data = storage.filter((v) => v.id !== num)

    if (data.length === 0) store.remove('quizList')
    else store.set('quizList', data)

    setIsModalOpen(false)
  }

  const modalCloseBtnClickHandler = () => setIsModalOpen(false)

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <>
        <p className={styles.modalText}>
          <span>QUIZ{num + 1}</span>을(를) <br />
          삭제하겠습니까?
        </p>
        <div className={styles.modalBtnContainer}>
          <button type='button' className={styles.modalDeleteBtn} onClick={modalDeleteBtnClickHandler}>
            삭제
          </button>
          <button type='button' className={styles.modalCloseBtn} onClick={modalCloseBtnClickHandler}>
            취소
          </button>
        </div>
      </>
    </Modal>
  )
}

export default DeleteBtnModal
