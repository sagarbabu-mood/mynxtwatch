import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  addToSavedVideo: () => {},
  removeSavedVideo: () => {},
  toggleTheme: () => {},
  likeVideo: () => {},
  dislikeVideo: () => {},
})

export default ThemeContext
