import React from 'react'
import styled from 'styled-components'
import { Display, Digits } from 'components'

const CalculatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 600px;
  background: linear-gradient(#d41edb, #6546e4);
`

const Calculator = ({ ...props }) => {
  return (
    <CalculatorWrapper {...props}>
      <Display />
      <Digits />
    </CalculatorWrapper>
  )
}

export default Calculator
