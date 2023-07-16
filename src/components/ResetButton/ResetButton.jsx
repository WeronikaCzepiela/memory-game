import './ResetButton.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const ResetButton = ({ restart }) => {
  const { width } = useWindowDimensions()
  const handleReset = () => {
    restart()
  }

  return (
    <button
      className={`restart-button ${width > dimension() && 'restart-button-desktop'}`}
      onClick={handleReset}>
      <p>Restart</p>
    </button>
  )
}
