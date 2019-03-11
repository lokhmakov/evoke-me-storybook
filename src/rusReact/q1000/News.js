import React                from 'react'


class News extends React.Component {
  render() {
    const {
      data,
      order,
    } = this.props

    return <>
      {order.map((id) => (
        <div>{data[id].hash}</div>
      ))}
    </>
  }
}

export default News