import React, { Component } from 'react'
import { storiesOf }        from '@storybook/react'
import { Button }           from '@storybook/react/demo'


storiesOf('Reactiflux - Question 1000', module)
  .add('with some emoji', () => (
    <Button>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ))
