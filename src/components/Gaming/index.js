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

class Gaming extends Component {
  state = {
    Data: '',
    loadd: false,
  }

  componentDidMount() {
    this.getTrending()
  }

  getTrending = async () => {
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
      }))
    }
  }

  render() {
    const {Data, loadd} = this.state
    console.log('load', loadd)
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <div>
              <Header />
              <MaincontainerOfTrending>
                <Menu />
                <Trend o={mode}>
                  <Head p={mode}>
                    <SiYoutubegaming className="icon-fire" />
                    Gaming
                  </Head>
                  <div className="game-card-container">
                    {loadd ? (
                      Data.map(eachItem => (
                        <GamingCard
                          id={eachItem.id}
                          eachItem={eachItem}
                          mode={mode}
                        />
                      ))
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
                </Trend>
              </MaincontainerOfTrending>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Gaming
