import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import Menu from '../Menu'
import TrendingVideosCard from '../TrendingVideosCard'
import './index.css'
import {MaincontainerOfTrending, Trend, Head, Final} from './styledComponents'

class Trending extends Component {
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
    const url = 'https://apis.ccbp.in/videos/trending'
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
            <Final>
              <Header />
              <MaincontainerOfTrending>
                <Menu id="trending" />
                <Trend o={mode} data-testid="trending">
                  <Head p={mode}>
                    <HiFire className="icon-fire" />
                    Trending
                  </Head>
                  <ul className="trend-list-container-1">
                    {loadd ? (
                      Data.map(eachItem => (
                        <TrendingVideosCard
                          id={eachItem.id}
                          eachItem={eachItem}
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
                  </ul>
                </Trend>
              </MaincontainerOfTrending>
            </Final>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Trending
