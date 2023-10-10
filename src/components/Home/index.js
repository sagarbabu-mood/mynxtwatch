import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  SidebarAndHomeContainer,
  BannerContainer,
  LeftPart,
  BannerImage,
  BannerText,
  BannerButton,
  BannerCloseButton,
  BannerRight,
  BannerAndHomeContainer,
  SearchAndHomeContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderViewContainer,
  HomeVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    display: 'flex',
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        homeVideos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickDisplay = () => {
    this.setState({display: 'none'})
  }

  displayBanner = () => {
    const {display} = this.state
    return (
      <BannerContainer data-testid="banner" display={display}>
        <LeftPart>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>Buy Nxt Watch Premium</BannerText>
          <BannerButton type="button">GET IN NOW</BannerButton>
        </LeftPart>
        <BannerRight>
          <BannerCloseButton data-testid="close" onClick={this.onClickDisplay}>
            <AiOutlineClose size={20} />
          </BannerCloseButton>
        </BannerRight>
      </BannerContainer>
    )
  }

  onUpdateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displayLoaderView = () => (
    <LoaderViewContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderViewContainer>
  )

  displaySuccessView = () => {
    const {homeVideos} = this.state
    return homeVideos.map(eachVideo => (
      <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
    ))
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.displayLoaderView()
      case apiStatusConstants.failure:
        return this.displayFailureView()
      case apiStatusConstants.success:
        return this.displaySuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer isDarkTheme={isDarkTheme}>
              <Header />
              <SidebarAndHomeContainer>
                <Sidebar />
                <BannerAndHomeContainer>
                  {this.displayBanner()}
                  <SearchAndHomeContainer isDarkTheme={isDarkTheme}>
                    <SearchContainer>
                      <SearchInput
                        onChange={this.onUpdateSearchInput}
                        placeholder="Search"
                        type="search"
                        value={searchInput}
                        isDarkTheme={isDarkTheme}
                      />
                      <SearchButton
                        isDarkTheme={isDarkTheme}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch color="#616e7c" size={20} />
                      </SearchButton>
                    </SearchContainer>
                    <HomeVideosContainer>
                      {this.renderHomeVideos()}
                    </HomeVideosContainer>
                  </SearchAndHomeContainer>
                </BannerAndHomeContainer>
              </SidebarAndHomeContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
