import { SHIPS_COUNT, SHIPS_SIZE } from "../configs/setup"
import { arePositionsTooClose, randomPositions } from "../helpers/getShips"

const getTinyShipPositionsCPU = function () {
  const tinyShips: Position[] = []

  for (let i = 1; i <= SHIPS_COUNT.tiny; i++) {
    let newPos: Position

    do {
      newPos = randomPositions()
    } while (tinyShips.some(prevPos => arePositionsTooClose(prevPos, newPos, SHIPS_SIZE.tiny)))

    tinyShips.push(newPos)
  }

  return tinyShips
}

export const getShips = function () {
  const tinyShips: Position[] = getTinyShipPositionsCPU()

  return {
    tinyShips,
  }
}
