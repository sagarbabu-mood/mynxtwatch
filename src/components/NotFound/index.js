import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  SideBarContainer,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundMainContainer>
          <Header />
          <SideBarContainer>
            <Sidebar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </SideBarContainer>
        </NotFoundMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
