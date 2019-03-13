import React from 'react'
import { storiesOf } from '@storybook/react'


import gameController from './gameController'


const PageHome = () => {
  gameController.notify()

  return <>
  </>
}

storiesOf('Discord|#996 - @butterscotch#0372 - factory class instance', module)
  .add('index', () => (
    <PageHome />
  ))
