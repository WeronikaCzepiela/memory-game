import './GameItem.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import KnifeAndFork from '../Icons/KnifeAndFork'

export const GameItem = (idx, order, vector, complete, clicked) => {
  const handleOnClick = () => {}

  const { width } = useWindowDimensions()
  return (
    <div className={`item ${width > 600 && 'item-desktop'}`} onClick={handleOnClick}>
      {/*<div className={`icon ${width > 600 && 'icon-dektop'}`}>*/}
      <KnifeAndFork className={'dupa'} />
      {/*</div>*/}
    </div>
  )
}
