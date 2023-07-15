import './App.scss'
import { Accounts } from './components/Accounts/Accounts'
import { Header } from './components/Header/Header'
import { Game } from './components/Game/Game'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from './utils/hookes/useWindowDimensions'
import { vectorIcons } from './utils/IconsBlock'
import { click } from '@testing-library/user-event/dist/click'

let isGameBlocked = false

const App = () => {
  const { width } = useWindowDimensions()
  const [blocks, setBlocks] = useState([])
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)

  const onClick = (vector, id, complete) => {
    const blocksWithUpdatedClicks = changeBlockStatusOnClicked(id)
    const blocksWith = changeStateClickedBlock(vector, id, blocksWithUpdatedClicks, complete)
    setBlocks(blocksWith)
    updateMoves(complete)
  }

  const updateMoves = (complete) => {
    if (!complete) {
      setMoves(moves + 1)
    }
  }

  // TODO
  const areTwoBlocksVisible = (clickedBlock) => {
    const updatedMoves = moves + 1
    return updatedMoves % 2 === 0 && clickedBlock.length !== 0
  }

  const areTwoClickedBlocksSame = (updatedBlocks, clickedBlock) => {
    return clickedBlock[0].vector === clickedBlock[1].vector
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

  const unmarkSelectedBlocksAsClicked = (updatedBlocks) => {
    return updatedBlocks.map((block) => {
      return {
        ...block,
        clicked: false,
      }
    })
  }

  const changeBlockStatusOnClicked = (id) => {
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

  const changeStateClickedBlock = (vector, id, updatedBlocks, complete) => {
    let newBlocks = []
    const clickedBlock = updatedBlocks.filter((block) => block.clicked && !block.complete)
    if (!complete) {
      if (areTwoBlocksVisible(clickedBlock)) {
        if (areTwoClickedBlocksSame(updatedBlocks, clickedBlock)) {
          newBlocks = markSelectedBlocksAsCompleted(updatedBlocks, clickedBlock)
        } else {
          newBlocks = unmarkSelectedBlocksAsClicked(updatedBlocks)
        }
        return newBlocks
      }
      return updatedBlocks
    }
    return updatedBlocks
  }

  const lengthOfArray = () => {
    if (width > 600) return 32
    else return 16
  }

  const getVectors = (length) => {
    let newChosenVectors = []

    while (newChosenVectors.length < length / 2) {
      const randomVector = vectorIcons[Math.floor(Math.random() * vectorIcons.length)].vector
      if (newChosenVectors.filter((element) => element === randomVector).length === 0) {
        newChosenVectors.push(randomVector)
      }
      console.log(newChosenVectors.length)
    }
    newChosenVectors = [...newChosenVectors, ...newChosenVectors]
    newChosenVectors.sort(() => Math.random() - 0.5)
    return newChosenVectors
  }

  const restart = () => {
    const length = lengthOfArray()
    const newChosenVectors = getVectors(length)
    setScore(0)
    setMoves(0)
    setBlocks(
      Array.from({ length: lengthOfArray() }).map((item, idx) => ({
        id: idx,
        clicked: false,
        complete: false,
        vector: newChosenVectors[idx],
      })),
    )
  }

  useEffect(() => {
    const length = lengthOfArray()
    const newChosenVectors = getVectors(length)
    if (width && !blocks.length)
      setBlocks(
        Array.from({ length: length }).map((item, idx) => ({
          id: idx,
          clicked: false,
          complete: false,
          vector: newChosenVectors[idx],
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
