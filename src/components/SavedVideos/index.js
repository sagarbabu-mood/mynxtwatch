import {RiPlayListAddFill} from 'react-icons/ri'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  SavedVideosContainer,
  SidebarAndSavedVideosContainer,
  TitleAndTrendingContainer,
  TitleContainer,
  TrendingIcon,
  TrendingTitle,
  EmptyViewContainer,
  EmptyViewImage,
  EmptyViewHeading,
  EmptyViewDescription,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const displayEmptyView = () => (
        <EmptyViewContainer>
          <EmptyViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <EmptyViewHeading isDarkTheme={isDarkTheme}>
            No saved videos found
          </EmptyViewHeading>
          <EmptyViewDescription isDarkTheme={isDarkTheme}>
            You can save your videos while watching them
          </EmptyViewDescription>
        </EmptyViewContainer>
      )

      const displaySavedVideos = () =>
        savedVideos.map(eachVideo => (
          <TrendingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))

      return (
        <SavedVideosContainer isDarkTheme={isDarkTheme}>
          <Header />
          <SidebarAndSavedVideosContainer>
            <Sidebar />
            <TitleAndTrendingContainer
              data-testid="savedVideos"
              isDarkTheme={isDarkTheme}
            >
              <TitleContainer isDarkTheme={isDarkTheme}>
                <TrendingIcon isDarkTheme={isDarkTheme}>
                  <RiPlayListAddFill color="#ff0000" size="30px" />
                </TrendingIcon>
                <TrendingTitle isDarkTheme={isDarkTheme}>
                  Saved Videos
                </TrendingTitle>
              </TitleContainer>
              {savedVideos.length > 0
                ? displaySavedVideos()
                : displayEmptyView()}
            </TitleAndTrendingContainer>
          </SidebarAndSavedVideosContainer>
        </SavedVideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
