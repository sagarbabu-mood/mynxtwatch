import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#f8fafc')};
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  box-shadow: ${props =>
    props.isDarkTheme ? '' : '0px 8px 40px rgba(0, 0, 0, 0.08)'};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`

export const LoginFormImage = styled.img`
  width: 165px;
  margin-top: 25px;
  margin-bottom: 20px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 185px;
  }
`
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const LoginLabel = styled.label`
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 5px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
`
export const LoginInput = styled.input`
  font-size: 13px;
  height: 40px;
  border: 1px solid #d7dfe9;
  font-weight: 500;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#1e293b')};
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ShowPasswordInput = styled.input`
  width: 15px;
  height: 15px;
`
export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  margin-left: 8px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#000000')};
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
