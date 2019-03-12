import 'resize-observer-polyfill'
import React                from 'react'
import { animated }         from 'react-spring'
import { storiesOf }        from '@storybook/react'
import styled               from 'styled-components'
import { use3dEffect }      from 'use-3d-effect'


import GlobalStyle          from '../GlobalStyle'


const Card = () => {
  const ref = React.useRef(null)
  const { style, ...mouseHandlers } = use3dEffect(ref)

  const A = React.useMemo(() => ({
    Button: styled(animated.div)`
      background: linear-gradient(to bottom, #e6f0a3 0%,#d2e638 50%,#c3d825 51%,#dbf043 100%);

      border-radius: 0.25em;

      font-family: Open Sans;

      text-align: center;

      margin: 2em;

      width: 200px;
      height: 100px;
    `
  }), [])

  return <>
    <GlobalStyle />
    <A.Button
      ref={ref}
      style={style}
      {...mouseHandlers}
    >
      Hover over me!
    </A.Button>
  </>
}

storiesOf('Examples|#1000 - Card with 3d effect', module)
  .add('index', () => (
    <Card />
  ))
