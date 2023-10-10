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

        return (
          <SidebarContainer isDarkTheme={isDarkTheme}>
            <NavLinksList>
              <NavLinkElement
                isLinkActive={pathname === '/'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink to="/">
                  <AiFillHome size="20" />
                  <LinkContent>Home</LinkContent>
                </StyledLink>
              </NavLinkElement>
              <NavLinkElement
                isLinkActive={pathname === '/trending'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink to="/trending">
                  <RiFireFill size="20" />
                  <LinkContent>Trending</LinkContent>
                </StyledLink>
              </NavLinkElement>
              <NavLinkElement
                isLinkActive={pathname === '/gaming'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink to="/gaming">
                  <SiYoutubegaming size="20" />
                  <LinkContent>Gaming</LinkContent>
                </StyledLink>
              </NavLinkElement>
              <NavLinkElement
                isLinkActive={pathname === '/saved-videos'}
                isDarkTheme={isDarkTheme}
              >
                <StyledLink to="/saved-videos">
                  <RiPlayListAddFill size="20" />
                  <LinkContent>Saved Videos</LinkContent>
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
