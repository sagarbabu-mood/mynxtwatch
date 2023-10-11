import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-family: 'Roboto';
  text-align: center;
`

export const FailureViewImage = styled.img`
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const FailureViewHeading = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const FailureViewDescription = styled.p`
  padding: 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const FailureViewButton = styled.button`
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
