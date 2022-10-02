import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import styles from './goBackBtn.module.scss'

const GoBackBtn = () => {
  const navigate = useNavigate()
  const goBackBtnClickHandler = () => navigate(-1)
  return (
    <button type='button' className={styles.goBackBtn} onClick={goBackBtnClickHandler}>
      <IoIosArrowBack />
    </button>
  )
}

export default GoBackBtn
