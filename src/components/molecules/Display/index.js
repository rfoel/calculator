import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const StyledDisplay = styled.div`
  display: flex;
  width: 300px;
  height: 644px;
  background: ${palette('gray', 0, true)};
  border-radius: 0 1.2em 1.2em 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`

const Display = ({ ...props }) => {
  return <StyledDisplay {...props} />
}

export default Display
