import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import WatchContext from '../../context/WatchContext'
import {MenuContainer, ContentMenu} from './styledCompnents'
import './index.css'

const Menu = props => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <MenuContainer k={mode}>
          <div>
            <Link to="/" className="link-container">
              <ContentMenu l={mode}>
                <AiFillHome className="menu-icon" />
                home
              </ContentMenu>
            </Link>
            <Link to="/trending" className="link-container">
              <ContentMenu l={mode}>
                <FaFire className="menu-icon" />
                trending
              </ContentMenu>
            </Link>
            <Link to="/gaming" className="link-container">
              <ContentMenu l={mode}>
                <SiYoutubegaming className="menu-icon" />
                Gaming
              </ContentMenu>
            </Link>
            <Link to="/savedVideos" className="link-container">
              <ContentMenu l={mode}>
                <RiMenuAddFill className="menu-icon" />
                saved videos
              </ContentMenu>
            </Link>
          </div>
          <div className="contact-container">
            <ContentMenu l={mode}>CONTACT US</ContentMenu>
            <ContentMenu l={mode}>
              {/* <FaFacebook className="social-icon" />
                  <AiFillTwitterCircle className="twitter-icon" />
                  <AiFillLinkedin className="social-icon" /> */}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                className="social-icon"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                className="social-icon"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                className="social-icon"
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

export default Menu
