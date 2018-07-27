import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  font-family: ${font('primary')};
  font-size: 1rem;
  color: ${palette('gray', 0)};
  background: transparent;
  width: 60px;
  height: 60px;
  border: 0;
  padding: 0;
  appearance: none;
  box-sizing: border-box;
  outline: none;
  transition: background-color 250ms ease-in, color 250ms ease-in, border-color 250ms ease-in;

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Button = ({ ...props }) => {
  return <StyledButton {...props} type="button" />
}

Button.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
}

Button.defaultProps = {
  palette: 'gray',
  height: 40,
}

export default Button
