import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/NxtWatchContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideo = video => {
    const {savedVideos} = this.state

    const videoItem = savedVideos.find(eachVideo => eachVideo.id === video.id)

    if (videoItem) {
      const updatedVideosList = savedVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({savedVideos: updatedVideosList})
    } else {
      const updatedVideosList = [...savedVideos, video]

      this.setState({savedVideos: updatedVideosList})
    }
  }

  likeVideo = video => {
    const {likedVideos, dislikedVideos} = this.state

    const videoItem = likedVideos.find(eachVideo => eachVideo.id === video.id)

    if (videoItem) {
      const updatedVideosList = likedVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({likedVideos: updatedVideosList})
    } else {
      const updatedVideosList = dislikedVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({
        likedVideos: [...likedVideos, video],
        dislikedVideos: updatedVideosList,
      })
    }
  }

  dislikeVideo = video => {
    const {dislikedVideos, likedVideos} = this.state
    const videoItem = dislikedVideos.find(each => each.id === video.id)
    if (videoItem) {
      const filteredDislikedVideos = dislikedVideos.filter(
        each => each.id !== video.id,
      )
      this.setState({
        dislikedVideos: filteredDislikedVideos,
      })
    } else {
      const filteredLikedVideos = likedVideos.filter(
        each => each.id !== video.id,
      )
      this.setState({
        dislikedVideos: [...dislikedVideos, video],
        likedVideos: filteredLikedVideos,
      })
    }
  }

  render() {
    const {isDarkTheme, dislikedVideos, likedVideos, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          likedVideos,
          dislikedVideos,
          likeVideo: this.likeVideo,
          dislikeVideo: this.dislikeVideo,
          toggleTheme: this.toggleTheme,
          addToSavedVideo: this.addToSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
