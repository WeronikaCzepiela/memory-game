import './Game.scss'
import { GameItem } from '../GameItem/GameItem'

export const Game = ({ blocks, onClick }) => {
  return (
    <div className={'game'}>
      {blocks.map((item) => (
        <GameItem {...item} onClick={onClick} />
      ))}
    </div>
  )
}
