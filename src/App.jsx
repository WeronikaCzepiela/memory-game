import './App.scss'
import { Accounts } from './components/Accounts/Accounts'
import { Header } from './components/Header/Header'
import { Game } from './components/Game/Game'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from './utils/hookes/useWindowDimensions'
import { vectorIcons } from './utils/IconsBlock'

const App = () => {
  const { width } = useWindowDimensions()
  const [blocks, setBlocks] = useState([])
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)

  const onClick = (vector, id, complete) => {
    updateMoves(complete)
    let updatedBlocks
    updatedBlocks = changeBlockOnClicked(id)
    // updatedBlocks = setTimeout(removeCompletedBlocks, 3000, vector, id, updatedBlocks)
    updatedBlocks = removeCompletedBlocks(vector, id, updatedBlocks)
    setBlocks(updatedBlocks)
    getVector()
  }

  const updateMoves = (complete) => {
    if (!complete) {
      setMoves(moves + 1)
    }
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
    const clickedBlock = updatedBlocks.filter((block) => block.clicked && !block.complete)
    if (updatedMoves % 2 === 0 && clickedBlock.length !== 0) {
      if (clickedBlock[0].vector === clickedBlock[1].vector) {
        setScore(score + 1)
        newBlocks = updatedBlocks.map((block) => {
          if (block.id === clickedBlock[0].id || block.id === clickedBlock[1].id) {
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

  const getVector = () => {
    const length = 8 //TODO
    let chosenVectors = Array.from({ length: 1 }).map(
      () => vectorIcons[Math.floor(Math.random() * vectorIcons.length)].vector,
    )
    while (chosenVectors.length !== length) {
      const randomVector = String(
        vectorIcons[Math.floor(Math.random() * vectorIcons.length)].vector,
      )
      if (chosenVectors.filter((element) => element === randomVector).length === 0) {
        chosenVectors.push(randomVector)
      }
    }
    chosenVectors = [...chosenVectors, ...chosenVectors]
    console.log(chosenVectors)
  }

  const restart = () => {
    setScore(0)
    setMoves(0)
    setBlocks(
      Array.from({ length: lengthOfArray() }).map((item, idx) => ({
        id: idx,
        clicked: false,
        complete: false,
        vector: idx % 8,
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
          vector: idx % 8,
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
