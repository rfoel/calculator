import React from 'react'
import styled from 'styled-components'
import { Button } from 'components'

const StyledDigits = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`

const Digits = ({ ...props }) => {
  return (
    <StyledDigits {...props}>
      <Button reverse>.</Button>
      <Button reverse>9</Button>
      <Button reverse>8</Button>
      <Button reverse>7</Button>
      <Button reverse>6</Button>
      <Button reverse>5</Button>
      <Button reverse>4</Button>
      <Button reverse>3</Button>
      <Button reverse>2</Button>
      <Button reverse>1</Button>
      <Button reverse>0</Button>
    </StyledDigits>
  )
}

export default Digits
