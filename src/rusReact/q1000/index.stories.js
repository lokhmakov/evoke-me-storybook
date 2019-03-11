import React, { Component } from 'react'
import { storiesOf }        from '@storybook/react'
import { Button }           from '@storybook/react/demo'


import PageHome             from './PageHome'


storiesOf('rusReact - Question 1000 - Class with async query', module)
  .add('PageHome', () => (
    <PageHome />
  ))
