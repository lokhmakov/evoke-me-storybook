import React from 'react'
import { storiesOf } from '@storybook/react'

const PageHome = () => {
  return (
    <>
      <input disabled value="disabled={true}" />
      <input disabled="disabled" value="disabled={`disabled`}" />
      <input readonly value="readonly={true}" />
      <input readonly={`readonly`} value="readonly={`readonly`}" />
    </>
  )
}

storiesOf('Telegram|#996 - @yevdenys - Input disabled', module).add(
  'index',
  () => <PageHome />,
)
