import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const GameItem = ({ id, order, vector, complete, clicked, onClick }) => {
  const handleOnClick = () => {
    onClick(vector, id)
  }
  const { width } = useWindowDimensions()
  return (
    <div
      className={`item ${width > 600 && 'item-desktop'} ${clicked ? 'item-clicked' : ''} ${
        complete ? 'item-complete' : ''
      }`}
      onClick={handleOnClick}>
      {vector}
    </div>
  )
}
