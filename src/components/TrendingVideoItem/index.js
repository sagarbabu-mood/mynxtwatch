import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemContainer,
  LinkElement,
  VideoTitle,
  VideoThumbnail,
  ChannelDetailsContainer,
  ChannelImage,
  VideoDetailsContainer,
  VideoInfoContainer,
  ChannelName,
  ViewsAndPublishedContainer,
  Dot1,
  ViewsPara,
  Dot2,
  PublishedDate,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    id,
    title,
    viewCount,
    thumbnailUrl,
    publishedAt,
  } = videoDetails

  const {profileImageUrl, name} = channel

  const getPublishedDate = () => {
    const formatDate = formatDistanceToNow(new Date(publishedAt))
    const distanceArray = new Array(formatDate.split(' '))

    const agoValue = `${distanceArray[0][1]} ${distanceArray[0][2]} ago`
    return agoValue
  }

  getPublishedDate()

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemContainer>
            <LinkElement to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer isDarkTheme={isDarkTheme}>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <VideoInfoContainer>
                    <ChannelName>{name}</ChannelName>
                    <Dot1>
                      <BsDot />
                    </Dot1>
                    <ViewsAndPublishedContainer>
                      <ViewsPara>{viewCount} views</ViewsPara>
                      <Dot2>
                        <BsDot />
                      </Dot2>
                      <PublishedDate>{getPublishedDate()}</PublishedDate>
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

export default TrendingVideoItem
