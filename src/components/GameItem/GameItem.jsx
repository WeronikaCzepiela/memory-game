import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const GameItem = ({
  id,
  order,
  vector,
  complete,
  clicked,
  updateMoves,
  changeBlockOnClicked,
}) => {
  const handleOnClick = () => {
    updateMoves()
    changeBlockOnClicked(id)
    // console.log(idx)
  }
  const { width } = useWindowDimensions()
  return (
    <div
      className={`item ${width > 600 && 'item-desktop'} ${clicked ? 'item-clicked' : ''}`}
      onClick={handleOnClick}></div>
  )
}
