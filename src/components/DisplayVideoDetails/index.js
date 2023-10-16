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
} from './styledComponents'

const DisplayVideoDetails = props => {
  const {videoDetails} = props
  const {
    title,
    channel,
    description,
    publishedAt,
    thumbnailUrl,
    videoUrl,
    viewCount,
  } = videoDetails
  const getPublishedDate = () => {
    const formatDate = formatDistanceToNow(new Date(publishedAt))
    const distanceArray = new Array(formatDate.split(' '))

    const agoValue = `${distanceArray[0][1]} ${distanceArray[0][2]} ago`
    return agoValue
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
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
                  <Button>
                    <AiOutlineLike />
                    Like
                  </Button>
                  <Button>
                    <BiDislike />
                    Dislike
                  </Button>
                  <Button>
                    <BiListPlus />
                    Save
                  </Button>
                </ButtonsContainer>
              </StyleContainer>
              <HorizontalLine />
            </VideoDetailsContainer>
          </VideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default DisplayVideoDetails
