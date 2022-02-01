import {Link} from 'react-router-dom'
import {GameHead, GamePara} from './styledComponents'
import './index.css'

const GamingCard = props => {
  const {eachItem, id, mode} = props
  return (
    <Link to={`/videos/${id}`} className="video-card-container1">
      <div className="game-card2">
        <img
          src={eachItem.thumbnail_url}
          className="game-image"
          alt="video thumbnail"
        />
        <GameHead s={mode}>{eachItem.title}</GameHead>
        <GamePara s={mode}>{eachItem.view_count} watching worldwide</GamePara>
      </div>
    </Link>
  )
}
export default GamingCard
