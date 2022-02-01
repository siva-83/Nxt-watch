import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {RiPlayListAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import Header from '../Header'
import Menu from '../Menu'
import './index.css'
import WatchContext from '../../context/WatchContext'
import {
  MainContainer,
  ContentContainer,
  Video,
  VideoTitle,
  LikeIconContainer,
  LikeContainer,
  VideoT,
} from './styledComponents'

class Videoplay extends Component {
  state = {
    loaded: false,
    result: '',
  }

  componentDidMount = async () => {
    const jwtToken = Cookies.get('nxt_watch')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.successfun(data)
    }
  }

  successfun = data => {
    this.setState({loaded: true, result: data})
    console.log(data)
  }

  render() {
    const {loaded, result} = this.state

    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          const {addvideos} = value
          const addsavedFun = id => {
            console.log('i am i  for providerrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
            addvideos(result)
          }
          return (
            <MainContainer>
              <Header />
              <ContentContainer>
                <Menu />
                {loaded ? (
                  <Video a={mode}>
                    <div className="responsive-container">
                      <ReactPlayer
                        url={result.video_details.video_url}
                        width="85vw"
                      />
                    </div>
                    <div className="below-video">
                      <VideoTitle v={mode}>
                        {result.video_details.title}
                      </VideoTitle>
                      <LikeIconContainer n={mode}>
                        <p>
                          {result.video_details.view_count} views .
                          {result.video_details.published_at}
                        </p>
                        <LikeContainer b={mode}>
                          <button className="like-icon">
                            <AiOutlineLike /> Like
                          </button>
                          <button className="like-icon">
                            <AiOutlineDislike /> Dislike
                          </button>
                          <button onClick={addsavedFun}>
                            <RiPlayListAddFill /> Save
                          </button>
                        </LikeContainer>
                      </LikeIconContainer>
                      <hr className="line" />
                      <div className="subscriber-container">
                        <img
                          src={result.video_details.channel.profile_image_url}
                          className="profile-image"
                        />
                        <div>
                          <VideoT v={mode}>
                            {result.video_details.channel.name}
                          </VideoT>
                          <VideoT v={mode}>
                            {result.video_details.channel.subscriber_count}{' '}
                            subscribers
                          </VideoT>
                          <VideoT v={mode}>
                            {result.video_details.description}
                          </VideoT>
                        </div>
                      </div>
                    </div>
                  </Video>
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
              </ContentContainer>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Videoplay
