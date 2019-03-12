import uuid                 from 'uuid/v4'


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
    }
  }

  return {
    data,
    order: Object.keys(data),
  }
}

const items = makeItems()

export default async function (payload = {}) {
  const {
    value
  } = payload

  const  { data } = items

  let order = value
    ? items.order.filter((id) => -1 !== data[id].name.indexOf(value))
    : Object.keys(items.data)

  return {
    data: items.data,
    order,
  }
}