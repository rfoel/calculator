import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  background: ${palette('secondary', 0)};
`

const MainTemplate = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MainTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MainTemplate
