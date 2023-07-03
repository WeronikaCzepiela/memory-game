import './Tables.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const Tables = ({ text, number }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={`tables ${width > 600 && 'tables-desktop'}`}>
      <p className={`text ${width > 600 && 'text-desktop'}`}>{text}</p>
      <p className={`number ${width > 600 && 'number-desktop'}`}>{number}</p>
    </div>
  )
}
