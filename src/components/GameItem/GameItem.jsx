import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const GameItem = (idx, order, complete, clicked) => {
  const { width } = useWindowDimensions()
  return <div className={`item ${width > 600 && 'item-desktop'}`}></div>
}
