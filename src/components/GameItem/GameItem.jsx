import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { vectorIcons } from '../../utils/IconsBlock'

export const GameItem = ({ id, vector, complete, clicked, onClick }) => {
  const { width } = useWindowDimensions()

  const handleOnClick = () => {
    onClick(vector, id, complete)
  }

  return (
    <div
      className={`item ${width > 600 && 'item-desktop'} ${clicked ? 'item-clicked' : ''} ${
        complete ? 'item-complete' : ''
      }`}
      onClick={handleOnClick}>
      {vector}
      {/*<div>{vectorIcons.find((item) => item.vector === vector).icon}</div>*/}
    </div>
  )
}

// className={`vector ${clicked ? 'vector-clicked' : ''} ${
//     complete ? 'vector-complete' : ''
// }`}>
// {vector}
