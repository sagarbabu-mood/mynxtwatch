import styled from 'styled-components'

export const VideoItemContainer = styled.div``

export const ReactPlayerContainer = styled.div`
  width: 100%;
  height: 300px;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    height: 400px;
    padding: 20px;
  }
`

export const VideoDetailsContainer = styled.div`
  padding: 10px 10px 10px 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  margin-left: 8px;
  font-weight: 0;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  padding: 0 10px 0px 10px;
`

export const Dot1 = styled.p`
  margin-top: 20px;
`

export const ViewsPara = styled.p`
  font-size: 12px;
  font-weight: 300px;
  color: ${props => (props.isDarkTheme ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const PublishedDate = styled.p`
  font-size: 12px;
  font-weight: 300px;
  color: ${props => (props.isDarkTheme ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0px 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  margin-right: 8px; /* Adjust the value to control the spacing */
`

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const HorizontalLine = styled.hr`
  width: 97%;
  border: 1px solid #64748b;
  //   margin: 0 50px 10px 10px;
  margin-left: 10px;
`
