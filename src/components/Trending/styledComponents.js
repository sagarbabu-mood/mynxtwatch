import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`
export const SidebarAndTrendingContainer = styled.div`
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
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#ffffff')};
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const TrendingTitle = styled.h1`
  font-size: 30px;
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
