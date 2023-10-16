import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const SidebarAndHomeContainer = styled.div`
  display: flex;
  min-height: 87vh;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 30vh;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 16px;
  top: 0; /* Fix the banner to the top of the viewport */
  z-index: 1; /* Ensure the banner is above other content */
`
export const LeftPart = styled.div`
  width: 50%;
`
export const BannerRight = styled.div`
  display: flex;
  align-self: flex-start;
  padding-right: 16px;
`
export const BannerImage = styled.img`
  width: 142px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  font-weight: 500;
`
export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  padding: 8px 14px 8px 14px;
  color: #1e293b;
  font-weight: 600;
  font-family: 'Roboto';
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`

export const BannerAndHomeContainer = styled.div`
  width: 100%;
  height: 86vh;
  overflow-y: auto; /* Add vertical scrollbar if content overflows */
`
export const SearchAndHomeContainer = styled.div`
  padding: 20px;
  min-height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  border: 1px solid #909090;
  border-radius: 2px;
  @media (min-width: 768px) {
    height: 30px;
    width: 50%;
  }
`
export const SearchInput = styled.input`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  background: none;
  width: 100%;
  height: 40px;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 10px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#313131')};
`
export const SearchButton = styled.button`
  height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#d7dfe9')};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
`
export const LoaderViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 400px;
  width: 100%;
`

export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
`

export const NoSearchResultsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-family: 'Roboto';
  text-align: center;
`

export const NoSearchResultsViewImage = styled.img`
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const NoSearchResultsViewHeading = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const NoSearchResultsViewDescription = styled.p`
  padding: 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
`

export const NoSearchResultsViewButton = styled.button`
  color: #f1f1f1;
  font-size: 14px;
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  padding: 10px;
  height: 40px;
  width: 100px;
  margin-bottom: 16px;
  font-weight: bold;
`
