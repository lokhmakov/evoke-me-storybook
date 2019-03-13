import GameController1 from './GameController1'
import GameController2 from './GameController2'

const data = {
  instance: null
}

function set(instance) {
  data.instance = instance
}

export function initNewGameController(payload = {}) {
  const { type } = payload

  if (type === 1) {
    set(new GameController1(payload))
  } else {
    set(new GameController2(payload))
  }
}

export default data