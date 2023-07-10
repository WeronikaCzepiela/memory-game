import './ResetButton.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const ResetButton = ({ restart }) => {
  const { width } = useWindowDimensions()
  const handleReset = () => {
    restart()
  }

  return (
    <button
      className={`restart-button ${width > 600 && 'reset-button-desktop'}`}
      onClick={handleReset}>
      <p>Restart</p>
    </button>
  )
}
