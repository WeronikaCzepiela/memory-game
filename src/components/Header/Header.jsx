import { Tables } from '../Tables/Tables'
import './Header.scss'
import { ResetButton } from '../ResetButton/ResetButton'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const Header = ({ score, moves, restart }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={`header ${width > 600 && 'header-desktop'}`}>
      <Tables text={'Score:'} number={score} />
      {width > 600 && <ResetButton restart={restart} />}
      <Tables text={'Moves:'} number={moves} />
    </div>
  )
}
