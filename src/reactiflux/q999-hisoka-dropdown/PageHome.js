import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import uuid from 'uuid/v4'


const categoryMap = {
  FIRST: `FIRST`,
  SECOND: `SECOND`,
  THIRD: `THIRD`,
}

const makeCategories = () => {
  const data = {
    [categoryMap.FIRST]: { id: categoryMap.FIRST, name: `First`, },
    [categoryMap.SECOND]: { id: categoryMap.SECOND, name: `Second`, },
    [categoryMap.THIRD]: { id: categoryMap.THIRD, name: `Third`, },
  }

  return {
    data,
    order: Object.keys(data),
  }
}

const categories = makeCategories()

const keys = Object.keys(categoryMap)
const randomCategory = () => categoryMap[keys[keys.length * Math.random() << 0]]

const makeItems = (payload = {}) => {
  const {
    length = 100,
  } = payload

  const data = {}

  for (let x = 0; x < length; x++) {
    const id = uuid()

    data[id] = {
      id,
      name: `name${x}`,
      category: randomCategory(),
    }
  }

  return {
    data,
    order: Object.keys(data),
  }
}

const items = makeItems()

const Dropdown = (props) => {
  const {
    data,
    order,
    onChange,
  } = props

  return <>
    <select onChange={onChange}>
      {order.map((id) => {
        const doc = data[id]

        return (
          <option
            key={id}
            value={id}
          >
            {doc.name}
          </option>
        )
      })}
    </select>
  </>
}

export default () => {
  const [category, categorySet] = React.useState(categoryMap.FIRST)

  const itemsOrder = React.useMemo(() => {
    if (!category) return items.order

    return items.order.filter((id) => items.data[id].category === category)
  }, [category])

  return <>
    <Dropdown
      data={categories.data}
      order={categories.order}
      onChange={({ target: { value } }) => categorySet(value)}
    />

    <Dropdown
      data={items.data}
      order={itemsOrder}
    />
  </>
}