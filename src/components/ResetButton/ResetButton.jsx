import './ResetButton.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

const handleReset = () => {}

export const ResetButton = () => {
  const { width } = useWindowDimensions()

  return (
    <button
      className={`restart-button ${width > 600 && 'reset-button-desktop'}`}
      onClick={handleReset}>
      <p>Restart</p>
    </button>
  )
}
