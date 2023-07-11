import './Game.scss'
import { GameItem } from '../GameItem/GameItem'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const Game = ({ blocks, onClick }) => {
  const { width } = useWindowDimensions()
  return (
    <div className={`game ${width > 600 && 'game-desktop'}`}>
      {blocks.map((item) => (
        <GameItem {...item} onClick={onClick} key={item.id} />
      ))}
    </div>
  )
}
