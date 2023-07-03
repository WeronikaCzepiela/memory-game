import { Tables } from '../Tables/Tables'
import './Header.scss'
import { ResetButton } from '../ResetButton/ResetButton'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'

export const Header = () => {
  const { width } = useWindowDimensions()

  return (
    // <div className={width > 600 ? 'header' : 'dupa'}>
    <div className={`header ${width > 600 && 'header-desktop'}`}>
      <Tables text={'Score:'} number={'5'} />
      {width > 600 && <ResetButton />}
      <Tables text={'Moves:'} number={'7'} />
    </div>
  )
}
