import {Link} from 'react-router-dom'
import WatchContext from '../../context/WatchContext'
import {Trend, Title, TitleHead} from './styledComponents'
import './index.css'

const TrendingVideosCard = props => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      const {eachItem, id} = props
      return (
        <Link to={`/videos/${id}`} className="video-card-container">
          <Trend o={mode}>
            <img
              src={eachItem.thumbnail_url}
              className="tumb"
              alt="video thumbnail"
            />
            <div>
              <TitleHead p={mode}>{eachItem.title}</TitleHead>
              <Title p={mode}>{eachItem.channel.name}</Title>
              <div className="viewcount-container">
                <Title p={mode}>{eachItem.view_count} views </Title>
                <Title p={mode}> . </Title>
                <Title p={mode}>{eachItem.published_at}</Title>
              </div>
            </div>
          </Trend>
        </Link>
      )
    }}
  </WatchContext.Consumer>
)
export default TrendingVideosCard
