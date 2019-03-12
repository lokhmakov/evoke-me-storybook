import React, { Component } from 'react'
import { storiesOf }        from '@storybook/react'
import { Button }           from '@storybook/react/demo'


import News                 from './News'
import yourMegaAxiosQuery   from './query'


class PageHome extends React.Component {
  constructor() {
    super()

    this.state = {
      order: [],
      data: {},
      timestamp: null,
    }
  }

  query = async () => {
    const {
      array,
      timestamp,
    } = await yourMegaAxiosQuery()

    const data = array.reduce((prev, doc) => {
      const { hash } = doc
      prev[hash] = doc
      return prev
    }, {})

    this.setState({
      data,
      order: Object.keys(data),
      timestamp,
    })
  }

  componentDidMount() {
    this.query()
  }

  render() {
    const {
      data,
      order,
      timestamp,
    } = this.state

    return <>
      {0 < order.length && (
        <News
          data={data}
          order={order}
          timestamp={timestamp}
        />
      )}
    </>
  }
}

storiesOf(`Telegram|#1000 - Class with async query`, module)
  .add(`index`, () => (
    <PageHome />
  ))
