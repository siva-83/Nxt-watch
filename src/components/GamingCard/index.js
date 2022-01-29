import {GameHead, GamePara} from './styledComponents'
import './index.css'

const GamingCard = props => {
  const {eachItem, id, mode} = props
  return (
    <div className="game-card2">
      <img src={eachItem.thumbnail_url} className="game-image" />
      <GameHead s={mode}>{eachItem.title}</GameHead>
      <GamePara s={mode}>{eachItem.view_count} watching worldwide</GamePara>
    </div>
  )
}
export default GamingCard
