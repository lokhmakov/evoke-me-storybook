import { configure, addParameters } from '@storybook/react'

addParameters({
  options: {
    name: `EvokeMe storybook`,
    url: `https://p5xpoy6zvj.sse.codesandbox.io/`,
    //goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
  },
})

function loadStories() {
  require(`../stories/index.js`)

  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
