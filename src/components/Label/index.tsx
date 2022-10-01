import styles from './label.module.scss'

interface IProps {
  color: string
  name: string
  text: string
}

const Label = ({ color, name, text }: IProps) => {
  return (
    <li className={styles.labelContainer}>
      <div>
        <div className={styles.circle} style={{ backgroundColor: color }} />
        <span>{name}</span>
      </div>
      <span className={styles.text}>{text}</span>
    </li>
  )
}

export default Label
