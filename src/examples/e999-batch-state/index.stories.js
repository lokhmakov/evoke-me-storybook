import React                from 'react'
import { storiesOf }        from '@storybook/react'

class BatchClass extends React.Component {
  constructor() {
    super()

    this.state = {
      value: 0,
      name: `name`,
    }
  }

  onClick = () => {
    this.setState({ value: 10 })
    this.setState({ name: `name1` })
  }

  render() {
    console.log(`BatchClass`, `RENDER`, this.state)

    return (
      <div onClick={this.onClick}>
        BatchClass
      </div>
    )
  }
}

function BatchFunction() {
  const [value, valueSet] = React.useState(0)
  const [name, nameSet] = React.useState(`name`)

  const onClick = React.useCallback(() => {
    valueSet(10)
    nameSet(`name1`)
  }, [])

  console.log(`BatchFunction`, `RENDER`, { name, value })

  return (
    <div onClick={onClick}>
      BatchFunction
    </div>
  )
}

function App() {
  return <>
    <BatchClass />
    <BatchFunction />
  </>
}

storiesOf('Examples|#999 - Batch seState', module)
  .add('index', () => (
    <App />
  ))
