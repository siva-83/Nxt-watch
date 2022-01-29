import './index.css'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiSunFill} from 'react-icons/ri'
import {MaincontainerHeader, Icon} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import {MainContainer} from '../Login/StyledComponents'

const Header = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode, changeMode} = value

      const changetheame = () => {
        changeMode()
      }

      return (
        <MaincontainerHeader m={mode}>
          {mode ? (
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                className="header-logo"
              />
            </Link>
          ) : (
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                className="header-logo"
              />
            </Link>
          )}

          <div>
            {mode ? (
              <Icon co={mode} onClick={changetheame} data-testid="theme">
                <FaMoon />
              </Icon>
            ) : (
              <Icon co={mode} onClick={changetheame} data-testid="theme">
                <RiSunFill />
              </Icon>
            )}

            <CgProfile className="header-profile" />
            <button className="header-logoout">Log Out</button>
          </div>
        </MaincontainerHeader>
      )
    }}
  </WatchContext.Consumer>
)
export default Header
