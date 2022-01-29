import React from 'react'

const WatchContext = React.createContext({
  mode: true,
  changeMode: () => {},
  savedVideos: [],
  addvideos: () => {},
})

export default WatchContext
