import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'

import { IndexPage } from 'components'

import theme from './themes/default'

injectGlobal`
  ${reset};
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <IndexPage />
    </ThemeProvider>
  )
}

export default App
