import { Dispatch, SetStateAction } from 'react'
import styles from './modal.module.scss'

interface IProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  children: JSX.Element
}

const Modal = ({ setIsModalOpen, children }: IProps) => {
  const backdropClickHandler = () => setIsModalOpen(false)

  return (
    <>
      <button type='button' className={styles.backdrop} onClick={backdropClickHandler} aria-hidden />
      <section className={styles.modalContainer}>
        <main>{children}</main>
      </section>
    </>
  )
}

export default Modal
