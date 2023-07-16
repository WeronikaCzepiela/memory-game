import { Statistics } from '../Statistics/Statistics'
import './Header.scss'
import { ResetButton } from '../ResetButton/ResetButton'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { dimension } from '../../utils/Dimension'

export const Header = ({ score, moves, restart }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={`header ${width > dimension() && 'header-desktop'}`}>
      <Statistics text={'Score:'} number={score} />
      {width > dimension() && <ResetButton restart={restart} />}
      <Statistics text={'Moves:'} number={moves} />
    </div>
  )
}
