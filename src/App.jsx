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
      vector: 'tower',
    })),
  )
  const [moves, setMoves] = useState(0)
  const updateMoves = () => {
    setMoves(moves + 1)
  }

  const changeBlockOnClicked = (id) => {
    const newBlocks = blocks.map((block) => {
      // console.log(block.id)
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

  return (
    <div className='App'>
      <Header moves={moves} />
      <Game blocks={blocks} updateMoves={updateMoves} changeBlockOnClicked={changeBlockOnClicked} />
      <Accounts />
    </div>
  )
}

export default App
