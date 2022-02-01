import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Menu from '../Menu'
import VideoItemDetailsRoute from '../VideoItemDetailsRoute'
import WatchContext from '../../context/WatchContext'

import {
  ContentMainContainer,
  ContentMenu,
  MenuContainer,
  ContentDisplayContainer,
  BannerContainer,
  ContentMen,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Content extends Component {
  state = {
    loaded: false,
    searchInput: '',
    result: [],
    banner: true,
    apiStatus: apiStatusConstants.initial,
  }

  getDataFun = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
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
      this.setState({
        result: data.videos,
        loaded: true,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
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

          const renderFailureView = () => {
            console.log('failedddddddddddddddddddddd')
            return (
              <ContentDisplayContainer j={mode} data-testid="home">
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
                      data-testid="close"
                    />
                  </BannerContainer>
                ) : (
                  ''
                )}
                <div>
                  {mode ? (
                    <div className="hii">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                        className="failure-image"
                      />
                      <ContentMen l={mode}>
                        Oops! Something Went Wrong
                      </ContentMen>
                      <ContentMenu l={mode}>
                        We are having some trouble to complete your request.
                        Please try again.
                      </ContentMenu>
                      <button className="login-button">Retry</button>
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        className="failure-image"
                      />
                      <ContentMen l={mode}>
                        Oops! Something Went Wrong
                      </ContentMen>
                      <ContentMenu l={mode}>
                        We are having some trouble to complete your request.
                        Please try again.
                      </ContentMenu>
                      <button
                        className="login-button"
                        onClick={this.getDataFun}
                      >
                        Retry
                      </button>
                    </div>
                  )}
                </div>
              </ContentDisplayContainer>
            )
          }

          const renderLoadingView = () => (
            <ContentDisplayContainer j={mode} data-testid="home">
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
                    data-testid="close"
                  />
                </BannerContainer>
              ) : (
                ''
              )}

              <div className="products-loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0b69ff"
                  height="50"
                  width="50"
                />
              </div>
            </ContentDisplayContainer>
          )

          const contentDisplay = () => {
            console.log('I am in', result)
            return (
              <div>
                <ContentDisplayContainer j={mode} data-testid="home">
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
                        data-testid="close"
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
                      <VideoItemDetailsRoute
                        eachItem={eachItem}
                        id={eachItem.id}
                        mode={mode}
                        onClick={this.playVideofun}
                      />
                    ))}
                  </div>
                </ContentDisplayContainer>
              </div>
            )
          }

          const renderJobs = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return contentDisplay(result)
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <ContentMainContainer>
              <Menu id="home" />

              {renderJobs()}
              {/* {contentFun()} */}
            </ContentMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Content
