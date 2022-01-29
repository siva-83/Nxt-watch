import './index.css'
import {Link} from 'react-router-dom'
import {Title} from './styledComponents'

const Videocard = props => {
  const {eachItem, mode, id} = props
  const wantedObj = {
    id: eachItem.id,
    title: eachItem.title,
    thumbnailUrl: eachItem.thumbnail_url,
    publishedAt: eachItem.published_at,
    viewCount: eachItem.view_count,
    channelprofileImageUrl: eachItem.channel.profile_image_url,
    name: eachItem.channel.name,
  }
  return (
    <Link to={`/videos/${id}`} className="video-card-container">
      <img src={wantedObj.thumbnailUrl} />
      <div className="video-card-text-container">
        <img
          src={wantedObj.channelprofileImageUrl}
          className="video-category"
        />
        <div className="title-container">
          <Title p={mode}>{wantedObj.title}</Title>
          <Title p={mode}>{wantedObj.name}</Title>
          <div className="viewcount-container">
            <Title p={mode}>{wantedObj.viewCount} views </Title>
            <Title p={mode}> . </Title>
            <Title p={mode}>{wantedObj.publishedAt}</Title>
          </div>
        </div>
      </div>
    </Link>
  )
  //   console.log(eachItem)
}
export default Videocard
