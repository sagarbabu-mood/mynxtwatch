import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
} from './styledComponents'

const FailureView = props => {
  const {onClickRetry} = props

  const Retry = () => {
    onClickRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureViewImage src={imageUrl} alt="failure view" />
            <FailureViewHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewDescription isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <FailureViewButton onClick={Retry} type="button">
              Retry
            </FailureViewButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
