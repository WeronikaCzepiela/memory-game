import './Game.scss'
import { useState } from 'react'
import KnifeAndFork from '../Icons/KnifeAndFork'
import { GameItem } from '../GameItem/GameItem'

export const Game = () => {
  const [game, setGame] = useState()

  return (
    <div className={'game'}>
      {Array.from({ length: 16 }).map((item, idx) => (
        <GameItem idx={idx} order={1} vector={<KnifeAndFork />} complete={false} clicked={false} />
      ))}
    </div>
  )
}
