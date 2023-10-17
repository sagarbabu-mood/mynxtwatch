import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`
export const SidebarAndSavedVideosContainer = styled.div`
  display: flex;
  min-height: 87vh;
`

export const TitleAndTrendingContainer = styled.div`
  width: 100%;
  max-height: 87vh; /* Set a maximum height for the container */
  overflow-y: auto; /* Add vertical scrollbar if content overflows */
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 20px 0 20px 40px;
  }
`

export const TrendingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#ffffff')};
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const TrendingTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  padding-left: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const TrendingVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
`

export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-family: 'Roboto';
  text-align: center;
`

export const EmptyViewImage = styled.img`
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const EmptyViewHeading = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const EmptyViewDescription = styled.p`
  padding: 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
