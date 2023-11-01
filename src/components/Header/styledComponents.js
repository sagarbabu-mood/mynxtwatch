import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#424242')};
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 14vh;
`

export const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const WebsiteLogo = styled.img`
  width: 80px;
  align-self: center;
  @media screen and (min-width: 576px) {
    width: 110px;
  }
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImageButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px 10px 10px;
`

export const LogoutImageButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  margin-bottom: 8px;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  margin-right: 40px;
  outline: none;
  cursor: pointer;
`
export const NavLinksList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
`
export const NavLinkElement = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  border: 0;
  background-color: ${props => props.selectedNavItemBgColor};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-align: left;
  width: 100vw;
  color: ${props => props.selectedNavIconColor};
`

export const LinkContent = styled.p`
  margin-left: 6px;
  font-size: 16px;
  color: ${props => props.textColor};
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px 30px;
  font-family: 'Roboto';
  border-radius: 5px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  box-shadow: 0px 0px 8px
    ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media screen and (min-width: 567px) {
    height: 150px;
    width: 350px;
    padding: 30px 50px;
  }
`

export const LogoutPopupText = styled.p`
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const LogoutButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const CustomButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  width: 60px;
  height: 30px;
  color: ${props => (props.outLine ? '#7e858e' : '#ffffff')};
  background-color: ${props => (props.outLine ? 'transparent' : '#3b82f6')};
  border: ${props => (props.outLine ? '1px solid #7e858e' : 'none')};
  border-radius: 5px;
  outline: none;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 80px;
    height: 40px;
  }
`
