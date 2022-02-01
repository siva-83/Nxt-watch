import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import WatchContext from '../../context/WatchContext'
import {MenuContainer, ContentMenu, ContentMenuu} from './styledCompnents'
import './index.css'

const Menu = props => {
  const {id} = props
  return (
    <WatchContext.Consumer>
      {value => {
        const {mode} = value
        const activeFun = event => {
          console.log('lllllllllllllllllllll', event.target.value)
        }
        return (
          <MenuContainer k={mode}>
            <ul className="test">
              <Link to="/" className="link-container">
                {id === 'home' ? (
                  <ContentMenuu
                    l={mode}
                    key="home"
                    value="home"
                    onClick={activeFun}
                  >
                    <AiFillHome className="menu-icon1" />
                    Home
                  </ContentMenuu>
                ) : (
                  <ContentMenu
                    l={mode}
                    key="home"
                    value="home"
                    onClick={activeFun}
                  >
                    <AiFillHome className="menu-icon" />
                    Home
                  </ContentMenu>
                )}
                {/* <ContentMenu
                  l={mode}
                  key="home"
                  value="home"
                  onClick={activeFun}
                >
                  <AiFillHome className="menu-icon" />
                  Home
                </ContentMenu> */}
              </Link>
              <Link to="/trending" className="link-container">
                {id === 'trending' ? (
                  <ContentMenuu
                    l={mode}
                    key="trending"
                    value="trending"
                    onClick={activeFun}
                  >
                    <FaFire className="menu-icon1" />
                    trending
                  </ContentMenuu>
                ) : (
                  <ContentMenu
                    l={mode}
                    key="trending"
                    value="trending"
                    onClick={activeFun}
                  >
                    <FaFire className="menu-icon" />
                    trending
                  </ContentMenu>
                )}
                {/* <ContentMenu
                  l={mode}
                  key="trending"
                  value="trending"
                  onClick={activeFun}
                >
                  <FaFire className="menu-icon" />
                  trending
                </ContentMenu> */}
              </Link>
              <Link to="/gaming" className="link-container">
                {id === 'gaming' ? (
                  <ContentMenuu
                    l={mode}
                    key="gaming"
                    value="gaming"
                    onClick={activeFun}
                  >
                    <SiYoutubegaming className="menu-icon1" />
                    Gaming
                  </ContentMenuu>
                ) : (
                  <ContentMenu
                    l={mode}
                    key="gaming"
                    value="gaming"
                    onClick={activeFun}
                  >
                    <SiYoutubegaming className="menu-icon" />
                    Gaming
                  </ContentMenu>
                )}

                {/* <ContentMenu
                  l={mode}
                  key="gaming"
                  value="gaming"
                  onClick={activeFun}
                >
                  <SiYoutubegaming className="menu-icon" />
                  Gaming
                </ContentMenu> */}
              </Link>
              <Link to="/saved-videos" className="link-container">
                {id === 'savedvideos' ? (
                  <ContentMenuu l={mode} key="savedvideos" onClick={activeFun}>
                    <RiMenuAddFill className="menu-icon1" id="savedvideos" />
                    Saved videos
                  </ContentMenuu>
                ) : (
                  <ContentMenu l={mode} key="savedvideos" onClick={activeFun}>
                    <RiMenuAddFill className="menu-icon" id="savedvideos" />
                    Saved videos
                  </ContentMenu>
                )}
                {/* <ContentMenu l={mode} key="savedvideos" onClick={activeFun}>
                  <RiMenuAddFill className="menu-icon" id="savedvideos" />
                  Saved videos
                </ContentMenu> */}
              </Link>
            </ul>
            <div className="contact-container">
              <ContentMenu l={mode}>CONTACT US</ContentMenu>
              <ContentMenu l={mode}>
                {/* <FaFacebook className="social-icon" />
                  <AiFillTwitterCircle className="twitter-icon" />
                  <AiFillLinkedin className="social-icon" /> */}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  className="social-icon"
                  alt="facebook logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  className="social-icon"
                  alt="twitter logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  className="social-icon"
                  alt="linked in logo"
                />
              </ContentMenu>
              <ContentMenu l={mode}>
                Enjoy! Now to see your channels and recommendations!
              </ContentMenu>
            </div>
          </MenuContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default Menu
