import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 18%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#424242')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  width: 100%;
`
export const NavLinkElement = styled.li`
  align-self: flex-start;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 0;
  width: 100%;
  padding-left: 20px;
  background-color: ${props =>
    props.isLinkActive ? '#7e858e' : 'transparent'};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#313131')};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  text-align: left;
`

export const LinkContent = styled.p`
  margin-left: 10px;
  font-size: 16px;
`

export const ContactsContainer = styled.div`
  padding-left: 20px;
  margin-top: auto;
  padding-right: 10px;
`

export const ContactHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconImage = styled.img`
  width: 28px;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const ContactUsBottomPara = styled.p`
  font-size: 12px;
  font-weight: 400;
`
