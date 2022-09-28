import styles from './box.module.scss'

interface IProps {
  children: JSX.Element
}

const Box = ({ children }: IProps) => {
  return <section className={styles.boxContainer}>{children}</section>
}

export default Box
