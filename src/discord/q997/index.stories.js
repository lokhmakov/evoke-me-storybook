import React from 'react'
import { storiesOf } from '@storybook/react'


const list = [
  { id: `id1`, name: `name1`, type: `type1`, },
  { id: `id2`, name: `name2`, type: `type1`, },
  { id: `id3`, name: `name3`, type: `type2`, },
]

const PageHome = () => {
  return <>
    {list.map((doc) => (
      doc.type === `type1` && (
        <div key={doc.id}>
          {doc.name}
        </div>
      )
    ))}
  </>
}

storiesOf('Discord|#997 - @2hands10fingers#7873 - Arrow function expression', module)
  .add('index', () => (
    <PageHome />
  ))
