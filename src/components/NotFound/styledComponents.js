import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`
export const SideBarContainer = styled.div`
  display: flex;
  min-height: 87vh;
`

export const NotFoundContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 3%;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const NotFoundImage = styled.img`
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const NotFoundHeading = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const NotFoundDescription = styled.p`
  padding: 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
