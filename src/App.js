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

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideo = video => {
    console.log(video)
    const {savedVideos} = this.state

    const videoItem = savedVideos.find(eachVideo => eachVideo.id === video.id)
    console.log(videoItem, savedVideos)

    if (videoItem) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.map(eachVideoItem => {
          if (videoItem.id === eachVideoItem.id) {
            return {...eachVideoItem, isSaved: !eachVideoItem.isSaved}
          }
          return eachVideoItem
        }),
      }))
    } else {
      const updatedVideosList = [...savedVideos, video]

      this.setState({savedVideos: updatedVideosList})
    }
  }

  removeSavedVideo = id => {
    console.log(id)
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
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
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
