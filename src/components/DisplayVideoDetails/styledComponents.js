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
  margin-top: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 15px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 300;
  height: 30px;
  width: 60px;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  margin-right: 5px;
  text-align: left;
  color: ${props => props.fontColor};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 80px;
    text-align: center;
    margin-right: 10px;
  }
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

export const ChannelDetailsContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
  display: flex;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
`

export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const ChannelNameAndSubscribersCountContainer = styled.div`
  margin-left: 10px;
`

export const ChannelName = styled.p`
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  color: ${props => (props.isDarkTheme ? ' #616e7c' : '#181818')};
`

export const SubscribersCount = styled.p`
  color: ${props => (props.isDarkTheme ? ' #616e7c' : '#475569')};
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const DescriptionContainer = styled.div``

export const Description = styled.p`
  font-size: 12px;
  padding-left: 10px;
  color: ${props => (props.isDarkTheme ? '#475569' : ' #616e7c')};
  @media screen and (min-width: 768px) {
    margin-left: 71px;
    font-size: 15px;
  }
`
