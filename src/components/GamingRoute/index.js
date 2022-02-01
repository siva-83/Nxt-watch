import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import GamingCard from '../GamingCard'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import Menu from '../Menu'
import TrendingVideosCard from '../TrendingVideosCard'
import './index.css'
import {MaincontainerOfTrending, Trend, Head} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    Data: '',
    loadd: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrending()
  }

  getTrending = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('nxt_watch')
    console.log('gooooood', jwtToken)
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result.videos)
    if (response.ok === true) {
      console.log('go on')
      this.setState(prevState => ({
        Data: result.videos,
        loadd: !prevState.loadd,
        apiStatus: apiStatusConstants.success,
      }))
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  render() {
    const {Data, loadd} = this.state
    console.log('load', loadd)
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value

          const contentDisplay = () => (
            <Trend o={mode} data-testid="gaming">
              <Head p={mode}>
                <SiYoutubegaming className="icon-fire" />
                Gaming
              </Head>
              <ul className="game-card-container">
                {Data.map(eachItem => (
                  <GamingCard
                    id={eachItem.id}
                    eachItem={eachItem}
                    mode={mode}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </Trend>
          )

          const renderLoadingView = () => (
            <Trend o={mode}>
              <div className="products-loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0b69ff"
                  height="50"
                  width="50"
                />
              </div>
            </Trend>
          )

          const renderFailureView = () => {
            console.log('failedddddddddddddddddddddd')
            return (
              <MaincontainerOfTrending>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
              </MaincontainerOfTrending>
            )
          }

          const renderJobs = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return contentDisplay()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <div className="gaming-container1">
              <Header />
              <MaincontainerOfTrending>
                <Menu id="gaming" />
                {renderJobs()}
              </MaincontainerOfTrending>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default GamingRoute
