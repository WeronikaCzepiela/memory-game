import './Statistics.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const Statistics = ({ text, number }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={`tables ${width > dimension() && 'tables-desktop'}`}>
      <p className={`text ${width > dimension() && 'text-desktop'}`}>{text}</p>
      <p className={`number ${width > dimension() && 'number-desktop'}`}>{number}</p>
    </div>
  )
}
