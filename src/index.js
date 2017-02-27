import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'

import App from './components/App/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

/* eslint-disable no-undef */

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    render(App)
  })
}

/* eslint-enable no-undef */