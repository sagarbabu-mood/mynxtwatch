import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import {
  TrendingContainer,
  SidebarAndTrendingContainer,
  TitleAndTrendingContainer,
  TitleContainer,
  TrendingIcon,
  TrendingTitle,
  TrendingVideosContainer,
} from './styledComponents'
import LoadingView from '../LoadingView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      console.log(formattedData)
      this.setState({
        trendingVideos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  displaySuccessView = isDarkTheme => {
    const {trendingVideos} = this.state

    return (
      <TrendingVideosContainer isDarkTheme={isDarkTheme}>
        {trendingVideos.map(eachVideo => (
          <GamingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosContainer>
    )
  }

  renderTrendingVideos = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoadingView />
      case apiStatusConstants.failure:
        return <FailureView onClickRetry={this.onClickRetry} />
      case apiStatusConstants.success:
        return this.displaySuccessView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer isDarkTheme={isDarkTheme}>
              <Header />
              <SidebarAndTrendingContainer>
                <Sidebar />
                <TitleAndTrendingContainer
                  data-testid="gaming"
                  isDarkTheme={isDarkTheme}
                >
                  <TitleContainer isDarkTheme={isDarkTheme}>
                    <TrendingIcon isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming color="#ff0000" size="30px" />
                    </TrendingIcon>
                    <TrendingTitle isDarkTheme={isDarkTheme}>
                      Gaming
                    </TrendingTitle>
                  </TitleContainer>
                  {this.renderTrendingVideos(isDarkTheme)}
                </TitleAndTrendingContainer>
              </SidebarAndTrendingContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
