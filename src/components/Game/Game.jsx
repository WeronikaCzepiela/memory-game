import './Game.scss'
import { GameItem } from '../GameItem/GameItem'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const Game = ({ blocks, onClick }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={`game ${width > dimension() && 'game-desktop'}`}>
      {blocks.map((item) => (
        <GameItem {...item} onClick={onClick} key={item.id} />
      ))}
    </div>
  )
}
