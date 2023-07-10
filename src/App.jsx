import './App.scss'
import { Accounts } from './components/Accounts/Accounts'
import { Header } from './components/Header/Header'
import { Game } from './components/Game/Game'
import { useState } from 'react'

const App = () => {
  const [blocks, setBlocks] = useState(
    Array.from({ length: 16 }).map((item, idx) => ({
      id: idx,
      clicked: false,
      complete: false,
      vector: String(idx % 8),
    })),
  )
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)
  const updateMoves = () => {
    setMoves(moves + 1)
  }

  const changeBlockOnClicked = (id) => {
    const newBlocks = blocks.map((block) => {
      if (block.id === id) {
        return {
          ...block,
          clicked: !block.clicked,
        }
      }
      return block
    })

    setBlocks(newBlocks)
  }

  const removeCompletedBlocks = (vector, id) => {
    const updatedMoves = moves + 1
    let newBlocks = []
    if (updatedMoves % 2 === 0) {
      const clickedBlock = blocks.find((block) => block.clicked)
      if (clickedBlock.vector === vector) {
        setScore(score + 1)
        newBlocks = blocks.map((block) => {
          if (block.id === clickedBlock.id || block.id === id) {
            return {
              ...block,
              complete: true,
            }
          }
          return block
        })
      } else {
        newBlocks = blocks.map((block) => {
          return {
            ...block,
            clicked: false,
          }
        })
      }
      setBlocks(newBlocks)
    }
  }

  const onClick = (vector, id) => {
    updateMoves()
    changeBlockOnClicked(id)
    removeCompletedBlocks(vector, id)
  }

  const restart = () => {
    setScore(0)
    setMoves(0)
    setBlocks(
      Array.from({ length: 16 }).map((item, idx) => ({
        id: idx,
        clicked: false,
        complete: false,
        vector: String(idx % 8),
      })),
    )
  }

  return (
    <div className='App'>
      <Header score={score} moves={moves} restart={restart} />
      <Game blocks={blocks} onClick={onClick} />
      <Accounts restart={restart} />
    </div>
  )
}

export default App
