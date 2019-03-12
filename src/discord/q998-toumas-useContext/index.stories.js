import React                from 'react'
import { storiesOf }        from '@storybook/react'


const Context = React.createContext()

const YourTop = (props) => {
  const { children } = props

  const [value, valueSet] = React.useState(0)

  return <Context.Provider
    value={{
      value, valueSet,
    }}
  >
    {children}
  </Context.Provider>
}


const YourChildren = (props) => {
  const { value, valueSet } = React.useContext(Context)

  return <>
    <div
      onClick={() => valueSet((value) => value + 1)}
    >
      Increase ({value})
    </div>
  </>
}

class YourClass extends React.Component {
  render() {
    return <>
      <Context.Consumer>
        {({ value, valueSet }) => (
          <div
            onClick={() => valueSet((value) => value - 1)}
          >
            Decrease ({ value })
          </div>
        )}
      </Context.Consumer>
    </>
  }
}

const PageHome = () => {

  return <>
    <YourTop>
      <YourChildren />
      <YourClass />
    </YourTop>
  </>
}

storiesOf('Discord|#998 - @tuomas#7298  - useContext', module)
  .add('index', () => (
    <PageHome />
  ))
