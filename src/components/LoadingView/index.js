import Loader from 'react-loader-spinner'

import {LoaderViewContainer} from './styledComponents'

const LoadingView = () => (
  <LoaderViewContainer data-testid="loader">
    <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
  </LoaderViewContainer>
)

export default LoadingView
