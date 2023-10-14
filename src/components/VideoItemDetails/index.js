import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  HomeContainer,
  SidebarAndHomeContainer,
  VideoItemDetailsContainer,
  ReactPlayerContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videosDetails: {}}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        publishedAt: data.video_details.published_at,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
      }
      this.setState({
        videosDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => this.getVideoItemDetails()

  displaySuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosDetails} = this.state
        const {videoUrl} = videosDetails
        return (
          <ReactPlayerContainer>
            <ReactPlayer
              style={{width: '100vw', padding: '10px'}}
              url={videoUrl}
            />
          </ReactPlayerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoadingView />
      case apiStatusConstants.failure:
        return <FailureView onClickRetry={this.onClickRetry} />
      case apiStatusConstants.success:
        return this.displaySuccessView()
      default:
        return null
    }
  }

  render() {
    const {videosDetails} = this.state
    console.log(videosDetails)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer
              data-testid="videoItemDetails"
              isDarkTheme={isDarkTheme}
            >
              <Header />
              <SidebarAndHomeContainer>
                <Sidebar />
                <VideoItemDetailsContainer isDarkTheme={isDarkTheme}>
                  {this.renderVideoDetails()}
                </VideoItemDetailsContainer>
              </SidebarAndHomeContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
