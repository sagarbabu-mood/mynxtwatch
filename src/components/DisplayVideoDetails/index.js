import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike, BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoItemContainer,
  ReactPlayerContainer,
  VideoDetailsContainer,
  ViewsAndPublishedContainer,
  VideoTitle,
  ViewsPara,
  Dot1,
  PublishedDate,
  ButtonsContainer,
  Button,
  StyleContainer,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelImage,
  ChannelNameAndSubscribersCountContainer,
  ChannelName,
  SubscribersCount,
  Description,
} from './styledComponents'

const DisplayVideoDetails = props => {
  const {videoDetails} = props
  const {
    title,
    channel,
    description,
    publishedAt,
    videoUrl,
    id,
    viewCount,
  } = videoDetails

  const {name, profileImageUrl, subscriberCount} = channel

  const getPublishedDate = () => {
    const formatDate = formatDistanceToNow(new Date(publishedAt))
    const distanceArray = new Array(formatDate.split(' '))

    const agoValue = `${distanceArray[0][1]} ${distanceArray[0][2]} ago`
    return agoValue
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          addToSavedVideo,
          savedVideos,
          likedVideos,
          dislikedVideos,
          likeVideo,
          dislikeVideo,
        } = value

        const isSaved = savedVideos.find(each => each.id === id)
          ? 'Saved'
          : 'Save'

        const isLiked = likedVideos.find(each => each.id === id)

        const isDisLiked = dislikedVideos.find(each => each.id === id)

        console.log(isLiked, isDisLiked, 'sagar')
        const onClickSaveButton = () => {
          addToSavedVideo(videoDetails)
        }

        return (
          <VideoItemContainer>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </ReactPlayerContainer>
            <VideoDetailsContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <StyleContainer>
                <ViewsAndPublishedContainer>
                  <ViewsPara isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </ViewsPara>
                  <Dot1>
                    <BsDot
                      size="15px"
                      color={isDarkTheme ? '#475569' : ' #94a3b8'}
                    />
                  </Dot1>
                  <PublishedDate isDarkTheme={isDarkTheme}>
                    {getPublishedDate()}
                  </PublishedDate>
                </ViewsAndPublishedContainer>
                <ButtonsContainer>
                  <Button
                    onClick={() => likeVideo(videoDetails)}
                    fontColor={isLiked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineLike />
                    Like
                  </Button>
                  <Button
                    fontColor={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={() => dislikeVideo(videoDetails)}
                  >
                    <BiDislike />
                    Dislike
                  </Button>
                  <Button
                    fontColor={isSaved === 'Saved' ? '#2563eb' : '#64748b'}
                    onClick={onClickSaveButton}
                  >
                    <BiListPlus />
                    {isSaved}
                  </Button>
                </ButtonsContainer>
              </StyleContainer>
              <HorizontalLine />
              <ChannelDetailsContainer>
                <ChannelImage alt="channel logo" src={profileImageUrl} />
                <ChannelNameAndSubscribersCountContainer>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <SubscribersCount isDarkTheme={isDarkTheme}>
                    {subscriberCount} subscribers
                  </SubscribersCount>
                </ChannelNameAndSubscribersCountContainer>
              </ChannelDetailsContainer>
              <Description isDarkTheme={isDarkTheme}>{description}</Description>
            </VideoDetailsContainer>
          </VideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default DisplayVideoDetails
