import React, { Component } from 'react'
import { storiesOf }        from '@storybook/react'
import { Button }           from '@storybook/react/demo'


import Q999PageHome        from './q999/PageHome'


storiesOf('rusReact', module)
  .add('#999 - Class with async query', () => (
    <Q999PageHome />
  ))
