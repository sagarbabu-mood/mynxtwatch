import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {RiFireFill, RiPlayListAddFill} from 'react-icons/ri'
import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderContainer,
  WebsiteLogo,
  IconsContainer,
  ThemeButton,
  HamburgerButton,
  ProfileImageButton,
  ProfileImage,
  LogoutImageButton,
  LogoutButton,
  ModalContainer,
  CloseButton,
  NavLinksList,
  NavLinkElement,
  LinkContent,
  StyledLink,
  LogoutContainer,
  LogoutPopupText,
  CustomButton,
  LogoutButtonsContainer,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    console.log('logged out')
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          console.log(isDarkTheme)
          const loginImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const ThemeIcon = isDarkTheme ? <FiSun /> : <FaMoon />

          const {location} = this.props
          const {pathname} = location

          const onUpdateTheme = () => {
            toggleTheme()
          }

          return (
            <HeaderContainer isDarkTheme={isDarkTheme}>
              <Link to="/">
                <WebsiteLogo alt="website logo" src={loginImageUrl} />
              </Link>
              <IconsContainer>
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onUpdateTheme}
                  isDarkTheme={isDarkTheme}
                >
                  {ThemeIcon}
                </ThemeButton>
                <Popup
                  modal
                  trigger={
                    <HamburgerButton type="button" isDarkTheme={isDarkTheme}>
                      <GiHamburgerMenu />
                    </HamburgerButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer
                      isDarkTheme={isDarkTheme}
                      className="modal-container"
                    >
                      <CloseButton
                        isDarkTheme={isDarkTheme}
                        onClick={() => close()}
                        type="button"
                      >
                        <IoMdClose size="30" />
                      </CloseButton>
                      <NavLinksList>
                        <NavLinkElement
                          isLinkActive={pathname === '/'}
                          isDarkTheme={isDarkTheme}
                        >
                          <StyledLink isDarkTheme={isDarkTheme} to="/">
                            <AiFillHome size="20" />
                            <LinkContent>Home</LinkContent>
                          </StyledLink>
                        </NavLinkElement>
                        <NavLinkElement
                          isLinkActive={pathname === '/trending'}
                          isDarkTheme={isDarkTheme}
                        >
                          <StyledLink isDarkTheme={isDarkTheme} to="/trending">
                            <RiFireFill size="20" />
                            <LinkContent>Trending</LinkContent>
                          </StyledLink>
                        </NavLinkElement>
                        <NavLinkElement
                          isLinkActive={pathname === '/gaming'}
                          isDarkTheme={isDarkTheme}
                        >
                          <StyledLink isDarkTheme={isDarkTheme} to="/gaming">
                            <SiYoutubegaming size="20" />
                            <LinkContent>Gaming</LinkContent>
                          </StyledLink>
                        </NavLinkElement>
                        <NavLinkElement
                          isLinkActive={pathname === '/saved-videos'}
                          isDarkTheme={isDarkTheme}
                        >
                          <StyledLink
                            isDarkTheme={isDarkTheme}
                            to="/saved-videos"
                          >
                            <RiPlayListAddFill size="20" />
                            <LinkContent>Saved Videos</LinkContent>
                          </StyledLink>
                        </NavLinkElement>
                      </NavLinksList>
                    </ModalContainer>
                  )}
                </Popup>

                <ProfileImageButton type="button" isDarkTheme={isDarkTheme}>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileImageButton>
                <Popup
                  modal
                  trigger={
                    <div>
                      <LogoutImageButton
                        type="button"
                        isDarkTheme={isDarkTheme}
                      >
                        <FiLogOut />
                      </LogoutImageButton>
                      <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                        Logout
                      </LogoutButton>
                    </div>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutContainer isDarkTheme={isDarkTheme}>
                      <LogoutPopupText isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </LogoutPopupText>
                      <LogoutButtonsContainer>
                        <CustomButton
                          type="button"
                          outLine
                          onClick={() => close()}
                        >
                          Cancel
                        </CustomButton>
                        <CustomButton
                          onClick={this.onClickLogout}
                          type="button"
                        >
                          Logout
                        </CustomButton>
                      </LogoutButtonsContainer>
                    </LogoutContainer>
                  )}
                </Popup>
              </IconsContainer>
            </HeaderContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
