import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemContainer,
  LinkElement,
  VideoTitle,
  VideoThumbnail,
  ChannelDetailsContainer,
  VideoDetailsContainer,
  VideoInfoContainer,
  ViewsAndPublishedContainer,
  ViewsPara,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, viewCount, thumbnailUrl} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemContainer>
            <LinkElement to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <VideoDetailsContainer isDarkTheme={isDarkTheme}>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <VideoInfoContainer>
                    <ViewsAndPublishedContainer>
                      <ViewsPara>{viewCount} views</ViewsPara>
                    </ViewsAndPublishedContainer>
                  </VideoInfoContainer>
                </VideoDetailsContainer>
              </ChannelDetailsContainer>
            </LinkElement>
          </VideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
