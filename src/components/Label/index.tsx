import styles from './label.module.scss'

interface IProps {
  color: string
  name: string
  text: string
}

const Label = ({ color, name, text }: IProps) => {
  return (
    <li>
      <div>
        <div className={styles.circle} style={{ backgroundColor: color }} />
        <span>{name}</span>
      </div>
      <span>{text}</span>
    </li>
  )
}

export default Label
