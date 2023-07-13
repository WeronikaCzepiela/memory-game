import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

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
      {' '}
      {vector}
      <div>{/*<Meteor width={50} height={50} fill={'white'} />*/}</div>
    </div>
  )
}

// className={`vector ${clicked ? 'vector-clicked' : ''} ${
//     complete ? 'vector-complete' : ''
// }`}>
// {vector}
