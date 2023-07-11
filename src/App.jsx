import './App.scss'
import { Accounts } from './components/Accounts/Accounts'
import { Header } from './components/Header/Header'
import { Game } from './components/Game/Game'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from './utils/hookes/useWindowDimensions'

const App = () => {
  const { width } = useWindowDimensions()
  const [blocks, setBlocks] = useState([])
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)

  const onClick = (vector, id) => {
    updateMoves()
    let updatedBlocks
    updatedBlocks = changeBlockOnClicked(id)
    updatedBlocks = removeCompletedBlocks(vector, id, updatedBlocks)
    setBlocks(updatedBlocks)
  }

  const updateMoves = () => {
    setMoves(moves + 1)
  }

  const changeBlockOnClicked = (id) => {
    let newBlocks
    newBlocks = blocks.map((block) => {
      if (block.id === id) {
        return {
          ...block,
          clicked: !block.clicked,
        }
      }
      return block
    })
    return newBlocks
  }

  const removeCompletedBlocks = (vector, id, updatedBlocks) => {
    const updatedMoves = moves + 1
    let newBlocks = []
    if (updatedMoves % 2 === 0) {
      const clickedBlock = updatedBlocks.find((block) => block.clicked && !block.complete)
      if (clickedBlock.vector === vector) {
        setScore(score + 1)
        newBlocks = updatedBlocks.map((block) => {
          if (block.id === clickedBlock.id || block.id === id) {
            return {
              ...block,
              complete: true,
            }
          }
          return block
        })
      } else {
        newBlocks = updatedBlocks.map((block) => {
          return {
            ...block,
            clicked: false,
          }
        })
      }
      return newBlocks
    }
    return updatedBlocks
  }

  const lengthOfArray = () => {
    if (width > 600) return 32
    else return 16
  }

  const restart = () => {
    setScore(0)
    setMoves(0)
    setBlocks(
      Array.from({ length: lengthOfArray() }).map((item, idx) => ({
        id: idx,
        clicked: false,
        complete: false,
        vector: String(idx % 8),
      })),
    )
  }

  useEffect(() => {
    if (width && !blocks.length)
      setBlocks(
        Array.from({ length: lengthOfArray() }).map((item, idx) => ({
          id: idx,
          clicked: false,
          complete: false,
          vector: String(idx % 8),
        })),
      )
  }, [width])

  return (
    <div className='App'>
      <Header score={score} moves={moves} restart={restart} />
      <Game blocks={blocks} onClick={onClick} />
      <Accounts restart={restart} />
    </div>
  )
}

export default App
