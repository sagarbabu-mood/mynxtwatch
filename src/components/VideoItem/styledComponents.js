import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 10px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    width: 40%;
    margin-right: 10px;
    flex-grow: 1;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 10px;
    flex-grow: 1;
  }
`
export const LinkElement = styled(Link)`
  text-decoration: none;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 8px;
  }
`

export const VideoDetailsContainer = styled.div`
  margin-right: auto;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  margin-left: 8px;
  font-weight: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const VideoInfoContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#475569' : ' #616e7c')};
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  margin: 0;
  color: inherit;
`

export const Dot1 = styled.p`
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`

export const ViewsPara = styled.p`
  margin: 0;
  color: inherit;
`

export const Dot2 = styled.p`
  margin-top: 20px;
`

export const PublishedDate = styled.p`
  margin: 0;
  color: inherit;
`
