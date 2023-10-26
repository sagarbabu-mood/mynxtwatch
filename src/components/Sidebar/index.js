import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {RiFireFill, RiPlayListAddFill} from 'react-icons/ri'
import {SiYoutubegaming} from 'react-icons/si'

import {
  SidebarContainer,
  NavLinkElement,
  NavLinksList,
  StyledLink,
  LinkContent,
  ContactsContainer,
  ContactHeading,
  IconsContainer,
  IconImage,
  ContactUsBottomPara,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Sidebar = props => {
  const {location} = props
  const {pathname} = location
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const themeBasedBgColor = isDarkTheme ? '#475569' : '#e2e8f0'
        const themeBasedColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <SidebarContainer isDarkTheme={isDarkTheme}>
            <NavLinksList>
              <NavLinkElement
                selectedNavItemBgColor={
                  pathname === '/' ? themeBasedBgColor : 'none'
                }
                isLinkActive={pathname === '/'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink
                  selectedNavIconColor={
                    pathname === '/' ? '#ff0000' : themeBasedColor
                  }
                  to="/"
                >
                  <AiFillHome size="20" />
                  <LinkContent textColor={themeBasedColor}>Home</LinkContent>
                </StyledLink>
              </NavLinkElement>
              <NavLinkElement
                selectedNavItemBgColor={
                  pathname === '/trending' ? themeBasedBgColor : 'none'
                }
                isLinkActive={pathname === '/trending'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink
                  selectedNavIconColor={
                    pathname === '/trending' ? '#ff0000' : themeBasedColor
                  }
                  to="/trending"
                >
                  <RiFireFill size="20" />
                  <LinkContent textColor={themeBasedColor}>
                    Trending
                  </LinkContent>
                </StyledLink>
              </NavLinkElement>
              <NavLinkElement
                selectedNavItemBgColor={
                  pathname === '/gaming' ? themeBasedBgColor : 'none'
                }
                isLinkActive={pathname === '/gaming'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink
                  selectedNavIconColor={
                    pathname === '/gaming' ? '#ff0000' : themeBasedColor
                  }
                  to="/gaming"
                >
                  <SiYoutubegaming size="20" />
                  <LinkContent textColor={themeBasedColor}>Gaming</LinkContent>
                </StyledLink>
              </NavLinkElement>
              <NavLinkElement
                selectedNavItemBgColor={
                  pathname === '/saved-videos' ? themeBasedBgColor : 'none'
                }
                isLinkActive={pathname === '/saved-videos'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink
                  selectedNavIconColor={
                    pathname === '/saved-videos' ? '#ff0000' : themeBasedColor
                  }
                  to="/saved-videos"
                >
                  <RiPlayListAddFill size="20" />
                  <LinkContent textColor={themeBasedColor}>
                    Saved Videos
                  </LinkContent>
                </StyledLink>
              </NavLinkElement>
            </NavLinksList>
            <ContactsContainer>
              <ContactHeading>CONTACT US</ContactHeading>
              <IconsContainer>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <ContactUsBottomPara>
                Enjoy! Now to see your channels and recommendations!
              </ContactUsBottomPara>
            </ContactsContainer>
          </SidebarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Sidebar)
