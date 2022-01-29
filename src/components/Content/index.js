import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Menu from '../Menu'
import Videocard from '../Videocard'
import WatchContext from '../../context/WatchContext'

import {
  ContentMainContainer,
  ContentMenu,
  MenuContainer,
  ContentDisplayContainer,
  BannerContainer,
} from './styledComponents'

class Content extends Component {
  state = {
    loaded: false,
    searchInput: '',
    result: [],
    banner: true,
  }

  getDataFun = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('nxt_watch')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data.videos)

    if (response.ok === true) {
      console.log('success')
      this.setState({result: data.videos, loaded: true})
    }
  }

  componentDidMount = async () => {
    this.getDataFun()
  }

  closeBannerFun = () => {
    this.setState({banner: false})
  }

  searchFun = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {result, banner, loaded, searchInput} = this.state
    console.log('jeffa', result)
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value

          const playVideofun = props => {
            console.log('heyyyyyyyyyyyyyy', props)
          }

          const contentDisplay = () => {
            console.log('I am in', result)
            return (
              <div>
                {loaded ? (
                  <ContentDisplayContainer j={mode}>
                    {banner ? (
                      <BannerContainer>
                        <div className="getit-container">
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            className="header-logo"
                          />
                          <p className="banner-para">
                            Buy NXT Watch premium prepaid plans with UPI
                          </p>
                          <button className="banner-button" type="button">
                            GET IT NOW
                          </button>
                        </div>
                        <GrFormClose
                          onClick={this.closeBannerFun}
                          className="close-icon"
                        />
                      </BannerContainer>
                    ) : (
                      ''
                    )}
                    <div className="search-container">
                      <input
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.searchFun}
                      />
                      <button
                        onClick={this.getDataFun}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </button>
                    </div>
                    <div className="video-container">
                      {result.map(eachItem => (
                        <Videocard
                          eachItem={eachItem}
                          id={eachItem.id}
                          mode={mode}
                          onClick={this.playVideofun}
                        />
                      ))}
                    </div>
                  </ContentDisplayContainer>
                ) : (
                  <div className="loader-container" data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#3b82f6"
                      height="50"
                      width="50"
                    />
                  </div>
                )}
              </div>
            )
          }

          return (
            <ContentMainContainer>
              <Menu />
              {contentDisplay(result)}

              {/* {contentFun()} */}
            </ContentMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Content
