import './Game.scss'
import { useState } from 'react'
import KnifeAndFork from '../Icons/KnifeAndFork'
import { GameItem } from '../GameItem/GameItem'

export const Game = ({ updateMoves }) => {
  return (
    <div className={'game'}>
      {Array.from({ length: 16 }).map((item, idx) => (
        <GameItem
          idx={idx}
          order={1}
          vector={false}
          complete={false}
          clicked={false}
          updateMoves={updateMoves}
        />
      ))}
    </div>
  )
}
