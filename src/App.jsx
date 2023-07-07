import './App.scss'
import { Accounts } from './components/Accounts/Accounts'
import { Header } from './components/Header/Header'
import { Game } from './components/Game/Game'
import { useState } from 'react'
const App = () => {
  const [moves, setMoves] = useState(0)
  const updateMoves = () => {
    setMoves(moves + 1)
    // console.log(moves)
  }

  return (
    <div className='App'>
      <Header moves={moves} />
      <Game updateMoves={updateMoves} />
      <Accounts />
    </div>
  )
}

export default App
