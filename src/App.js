import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import Videoplay from './components/Videoplay'
import WatchContext from './context/WatchContext'
// import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {
    mode: true,
    savedVideos: [],
  }

  changeMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  addvideos = result => {
    console.log('resulttttttttttttttt', result.video_details)
    const {savedVideos} = this.state
    const out = savedVideos.filter(
      eachEle => eachEle.id === result.video_details.id,
    )
    console.log('outtttttttttttt', out)
    // const out = savedVideos.includes(result.video_details)
    console.log('hoooooooo', out)
    if (out.length === 0) {
      const updated = [...savedVideos, result.video_details]
      this.setState(prevState => ({
        savedVideos: updated,
      }))
    }
  }

  render() {
    const {mode, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <WatchContext.Provider
            value={{
              mode,
              changeMode: this.changeMode,
              addvideos: this.addvideos,
              savedVideos,
            }}
          >
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/videos/:id" component={Videoplay} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/savedVideos" component={SavedVideos} />
          </WatchContext.Provider>
        </Switch>
      </div>
    )
  }
}
export default App
