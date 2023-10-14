import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  width: 50%;
  margin-bottom: 10px;
  list-style-type: none;
  padding: 10px;
  padding-right: 0px;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`

export const LinkElement = styled(Link)`
  text-decoration: none;
`

export const VideoThumbnail = styled.img`
  width: 80%;
  border-radius: 5px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: auto;
  }
`

export const VideoDetailsContainer = styled.div`
  margin-right: auto;
  text-align: left;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  font-weight: 0;
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 5px;
  }
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#475569' : ' #616e7c')};
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
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
