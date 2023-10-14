import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
`

export const SidebarAndHomeContainer = styled.div`
  display: flex;
  min-height: 87vh;
`
export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  height: 86vh;
  overflow-y: auto; /* Add vertical scrollbar if content overflows */
`
