import {Component} from 'react'
import {MaincontainerOfTrending, Trend, Head} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import TrendingVideosCard from '../TrendingVideosCard'
import './index.css'
import Header from '../Header'
import Menu from '../Menu'

class SavedVideos extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode, savedVideos} = value
          console.log('heyyyyyyyyyyyyyyyy', savedVideos)
          return (
            <div>
              <Header />
              <MaincontainerOfTrending>
                <Menu />
                <Trend o={mode}>
                  {/* <Head p={mode}>
                    <HiFire className="icon-fire" />
                    Trending
                  </Head> */}

                  {savedVideos.map(eachItem => (
                    <TrendingVideosCard id={eachItem.id} eachItem={eachItem} />
                  ))}
                </Trend>
              </MaincontainerOfTrending>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default SavedVideos
