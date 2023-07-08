import './Game.scss'
import { GameItem } from '../GameItem/GameItem'

export const Game = ({ blocks, updateMoves, changeBlockOnClicked }) => {
  return (
    <div className={'game'}>
      {blocks.map((item) => (
        <GameItem {...item} updateMoves={updateMoves} changeBlockOnClicked={changeBlockOnClicked} />
      ))}
    </div>
  )
}
