import GitHub from './images/GitHub.png'
import LinkdedIn from './images/LinkedIn.png'
import './Accounts.scss'
import { useWindowDimensions } from '../../utils/hookes/useWindowDimensions'
import { ResetButton } from '../ResetButton/ResetButton'
import { dimension } from '../../utils/Dimension'

export const Accounts = ({ restart }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={'bottom'}>
      {width < dimension() && <ResetButton restart={restart} />}
      <div className={`accounts ${width > dimension() && 'accounts-desktop'}`}>
        <p>Check my accounts</p>
        <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
          <img src={GitHub} />
        </a>
        <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
          <img src={LinkdedIn} />
        </a>
      </div>
    </div>
  )
}
