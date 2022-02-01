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
          const len = savedVideos.length
          return (
            <div className="for-test">
              <Header />
              <MaincontainerOfTrending>
                <Menu id="savedvideos" />
                <Trend o={mode} data-testid="savedVideos">
                  {/* <Head p={mode}>
                    <HiFire className="icon-fire" />
                    Trending
                  </Head> */}

                  {len > 0 ? (
                    <>
                      {savedVideos.map(eachItem => (
                        <TrendingVideosCard
                          id={eachItem.id}
                          eachItem={eachItem}
                          data-testid="savedVideos"
                        />
                      ))}
                    </>
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      className="no-saved-image"
                      alt="no saved videos"
                    />
                  )}
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
