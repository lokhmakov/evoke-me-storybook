import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'

import query from './query'

function useDebounce(value, delay) {
  const [debouncedValue, debouncedValueSet] = React.useState(value)

  React.useEffect(
    () => {
      const handler = setTimeout(() => {
        debouncedValueSet(value)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    },
    [value],
  )

  return debouncedValue
}

const PageHome = () => {
  const [value, valueSet] = React.useState(``)
  const [items, itemsSet] = React.useState({
    data: {},
    order: [],
  })

  const valueDebounce = useDebounce(value, 500)

  React.useEffect(
    () => {
      const fetch = async () => {
        const items = await query({ value: valueDebounce })
        itemsSet(items)
      }

      fetch()
    },
    [valueDebounce],
  )

  return (
    <>
      <input
        onChange={({ target: { value } }) => valueSet(value)}
        value={value}
      />
      {items.order.map(id => (
        <div key={id}>{items.data[id].name}</div>
      ))}
    </>
  )
}

storiesOf(`Telegram|#998 - @Reystlin31 - Debounce async request`, module).add(
  `index`,
  () => <PageHome />,
)
