import './index.css'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {Link, Redirect, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiSunFill} from 'react-icons/ri'
import {MaincontainerHeader, Icon} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import {MainContainer} from '../Login/StyledComponents'

const Header = props => (
  <WatchContext.Consumer>
    {value => {
      const {mode, changeMode} = value

      const changetheame = () => {
        changeMode()
      }
      const logFun = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <MaincontainerHeader m={mode}>
          {mode ? (
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                className="header-logo"
                alt="website logo"
              />
            </Link>
          ) : (
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                className="header-logo"
                alt="website logo"
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

            {/* <CgProfile className="header-profile" /> */}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              className="header-profile"
              alt="profile"
            />

            <Popup
              modal
              trigger={<button className="header-logoout">Logout</button>}
            >
              {close => (
                <div className="popup-cont">
                  <p className="popup-para">
                    Are you sure, you want to logout?
                  </p>
                  <button className="cancel-button" onClick={close}>
                    Cancel
                  </button>
                  <button className="cancel-sub" onClick={logFun}>
                    Confirm
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </MaincontainerHeader>
      )
    }}
  </WatchContext.Consumer>
)
export default withRouter(Header)
