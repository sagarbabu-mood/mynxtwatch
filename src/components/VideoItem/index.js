import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

const VideoItem = props => {
  const {videoDetails} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return <p>Sagar</p>
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
