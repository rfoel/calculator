import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('digit', () => <Button>1</Button>)
  .add('operator', () => <Button>+</Button>)
