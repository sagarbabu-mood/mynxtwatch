import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginMainContainer,
  LoginFormContainer,
  LoginFormImage,
  LabelAndInputContainer,
  LoginLabel,
  LoginInput,
  ShowPasswordContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isPasswordVisible: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  render() {
    const {isPasswordVisible, username, password, errorMsg} = this.state
    const passwordOrText = isPasswordVisible ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginMainContainer isDarkTheme={isDarkTheme === true}>
              <LoginFormContainer
                isDarkTheme={isDarkTheme === true}
                onSubmit={this.submitForm}
              >
                <LoginFormImage alt="website logo" src={loginImageUrl} />
                <LabelAndInputContainer>
                  <LoginLabel
                    htmlFor="username"
                    isDarkTheme={isDarkTheme === true}
                  >
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    type="text"
                    placeholder="Username"
                    isDarkTheme={isDarkTheme === true}
                  />
                </LabelAndInputContainer>
                <LabelAndInputContainer>
                  <LoginLabel
                    htmlFor="password"
                    isDarkTheme={isDarkTheme === true}
                  >
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    id="password"
                    type={passwordOrText}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                    isDarkTheme={isDarkTheme === true}
                  />
                </LabelAndInputContainer>
                <ShowPasswordContainer>
                  <ShowPasswordInput
                    checked={isPasswordVisible}
                    onChange={this.onChangeCheckbox}
                    id="checkbox"
                    type="checkbox"
                  />
                  <ShowPasswordLabel
                    htmlFor="checkbox"
                    isDarkTheme={isDarkTheme === true}
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginFormContainer>
            </LoginMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
