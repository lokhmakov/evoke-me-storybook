import React                from 'react'
import { storiesOf }        from '@storybook/react'
import styled               from 'styled-components'


import E1000Card            from './e1000-use-3d-effect/Card'


storiesOf('examples', module)
  .add('#1000 - Card with 3d effect', () => (
    <E1000Card />
  ), {
    notes: {
      markdown: `
        # HEADER 1
      `
    },
  })
