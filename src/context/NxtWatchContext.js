import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  addToSavedVideo: () => {},
  removeSavedVideo: () => {},
  toggleTheme: () => {},
  likeVideo: () => {},
  dislikeVideo: () => {},
  likedVideos: [],
  dislikedVideos: [],
})

export default ThemeContext
