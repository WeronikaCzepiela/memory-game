import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import KnifeAndFork from '../Icons/Ghost'
import Ghost from '../Icons/Ghost'
import PuzzlePiece from '../Icons/PuzzlePiece'
import HatWizzard from '../Icons/HatWizzard'
import ChessKnight from '../Icons/ChessKnight'
import ChessRook from '../Icons/ChessRook'
import Hippo from '../Icons/Hippo'
import Poo from '../Icons/Poo'
import Umbrella from '../Icons/Umbrella'
import Droplet from '../Icons/Droplet'
import MugSaucer from '../Icons/MugSaucer'
import Bug from '../Icons/Bug'
import UserSecret from '../Icons/UserSecret'
import Anchor from '../Icons/Anchor'
import Leaf from '../Icons/Leaf'
import Virus from '../Icons/Virus'
import Dragon from '../Icons/Dragon'
import LightBulb from '../Icons/LightBulb'
import TruckMonster from '../Icons/TruckMonster'
import WineGlass from '../Icons/WineGlass'
import Vial from '../Icons/Vial'
import Volcano from '../Icons/Volcano'
import Suitcase from '../Icons/Suitcase'
import Socks from '../Icons/Socks'
import Snowman from '../Icons/Snowman'
import ShoePrints from '../Icons/ShoePrints'
import SackDollar from '../Icons/SackDollar'
import PiggyBank from '../Icons/PiggyBank'
import PizzaSlice from '../Icons/PizzaSlice'
import Paw from '../Icons/Paw'
import Meteor from '../Icons/Meteor'

export const GameItem = ({ id, order, vector, complete, clicked, onClick }) => {
  const { width } = useWindowDimensions()

  const handleOnClick = () => {
    onClick(vector, id)
  }

  return (
    <div
      className={`item ${width > 600 && 'item-desktop'} ${clicked ? 'item-clicked' : ''} ${
        complete ? 'item-complete' : ''
      }`}
      onClick={handleOnClick}>
      <div>
        <Meteor width={50} height={50} fill={'white'} />
      </div>
    </div>
  )
}

// className={`vector ${clicked ? 'vector-clicked' : ''} ${
//     complete ? 'vector-complete' : ''
// }`}
