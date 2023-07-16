import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { vectorIcons } from '../../utils/VectorIcons'
import { dimension } from '../../utils/Dimension'

export const GameItem = ({ id, vector, complete, clicked, onClick }) => {
  const { width } = useWindowDimensions()

  const handleOnClick = () => {
    onClick(vector, id, complete)
  }

  return (
    <div
      className={`item ${width > dimension() && 'item-desktop'} ${clicked ? 'item-clicked' : ''} ${
        complete ? 'item-complete' : ''
      }`}
      onClick={handleOnClick}>
      <div
        className={`vector ${clicked ? 'vector-clicked' : ''} ${
          complete ? 'vector-complete' : ''
        }`}>
        {vectorIcons.find((item) => item.vector === vector).icon}
      </div>
    </div>
  )
}
