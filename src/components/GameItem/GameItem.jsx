import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const GameItem = ({ idx, order, vector, complete, clicked, updateMoves }) => {
  const handleOnClick = () => {
    updateMoves()
  }
  const { width } = useWindowDimensions()
  return <div className={`item ${width > 600 && 'item-desktop'}`} onClick={handleOnClick}></div>
}
