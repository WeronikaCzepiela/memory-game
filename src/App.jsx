import './App.scss'
import { Accounts } from './components/Accounts/Accounts'
import { Header } from './components/Header/Header'
import { Game } from './components/Game/Game'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from './utils/hookes/useWindowDimensions'
import {
  getNewArray,
  areTwoClickedBlocksSame,
  unmarkSelectedBlocksAsClicked,
  changeBlockStatusOnClicked,
  areTwoBlocksVisible,
} from './App.helpers'

let isGameBlocked = false

const App = () => {
  const { width } = useWindowDimensions()
  const [blocks, setBlocks] = useState([])
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)

  const updateMoves = (complete) => {
    if (!complete) {
      setMoves(moves + 1)
    }
  }

  const lengthOfArray = () => {
console.log('jaaa')
    if (width > 600) return 32
    else return 16
  }

  const markSelectedBlocksAsCompleted = (updatedBlocks, clickedBlock) => {
    setScore(score + 1)
    return updatedBlocks.map((block) => {
      if (block.id === clickedBlock[0].id || block.id === clickedBlock[1].id) {
        return {
          ...block,
          complete: true,
        }
      }
      return block
    })
  }

  const changeStateClickedBlock = (vector, id, updatedBlocks, complete) => {
    const clickedBlock = updatedBlocks.filter((block) => block.clicked && !block.complete)
    if (!complete) {
      if (areTwoBlocksVisible(clickedBlock, moves)) {
        if (areTwoClickedBlocksSame(updatedBlocks, clickedBlock)) {
          return markSelectedBlocksAsCompleted(updatedBlocks, clickedBlock)
        } else {
          return unmarkSelectedBlocksAsClicked(updatedBlocks)
        }
      }
      return updatedBlocks
    }
    return updatedBlocks
  }

  const onClick = (vector, id, complete) => {
    if (isGameBlocked) return

    const blocksWithUpdatedClicks = changeBlockStatusOnClicked(id, blocks)
    const clickedBlock = blocksWithUpdatedClicks.filter((block) => block.clicked && !block.complete)
    if (areTwoBlocksVisible(clickedBlock, moves)) {
      isGameBlocked = true

      setBlocks(changeBlockStatusOnClicked(id, blocks))
      setTimeout(() => {
        const blocksWithChangedState = changeStateClickedBlock(
          vector,
          id,
          blocksWithUpdatedClicks,
          complete,
        )
        setBlocks(blocksWithChangedState)
        updateMoves(complete)
        isGameBlocked = false
      }, 1000)
    } else {
      const blocksWithChangedState = changeStateClickedBlock(
        vector,
        id,
        blocksWithUpdatedClicks,
        complete,
      )
      setBlocks(blocksWithChangedState)
      updateMoves(complete)
    }
  }

  const restartGameBoard = () => {
    const length = lengthOfArray()
    setScore(0)
    setMoves(0)
    setBlocks(getNewArray(length))
  }

  useEffect(() => {
    const lengthOfBlocksArray = lengthOfArray()
    if (width && !blocks.length) setBlocks(getNewArray(lengthOfBlocksArray))
  }, [width])

  return (
    <div className='App'>
      <Header score={score} moves={moves} restart={restartGameBoard} />
      <Game blocks={blocks} onClick={onClick} />
      <Accounts restart={restartGameBoard} />
    </div>
  )
}

export default App
