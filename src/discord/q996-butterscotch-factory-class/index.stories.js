import React from 'react'
import { storiesOf } from '@storybook/react'



import gameController from './gameController'
import { initNewGameController } from './gameController'


initNewGameController({ type: 0 })

gameController.instance.notify()

initNewGameController({ type: 1 })

gameController.instance.notify()

const PageHome = () => {
  return <>
  </>
}

storiesOf('Discord|#996 - @butterscotch#0372 - factory class instance', module)
  .add('index', () => (
    <PageHome />
  ))
