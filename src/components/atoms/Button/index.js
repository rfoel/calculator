import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Ripples from 'react-ripples'
import { font, palette } from 'styled-theme'

const StyledButton = styled(Ripples)`
  display: inline-flex !important;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  font-family: ${font('primary')};
  font-size: 1rem;
  color: ${palette('gray', 0)};
  background: transparent;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 50%;
  padding: 0;
  appearance: none;
  box-sizing: border-box;
  outline: none;
  user-select: none;
`

const Button = ({ ...props }) => {
  return <StyledButton {...props} type="button" />
}

Button.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Button.defaultProps = {
  palette: 'gray',
}

export default Button
