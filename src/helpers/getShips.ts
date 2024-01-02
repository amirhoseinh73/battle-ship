import { BOARD, SHIPS_COUNT, SHIPS_SIZE } from "../configs/setup"
import { genrateRandNum } from "./global"

type CalcOffsetShipsArgs = {
  position: Position
  len: number
  orientation?: ShipOrientation
}

const randomPositions = function () {
  return {
    x: genrateRandNum(BOARD.rows),
    y: genrateRandNum(BOARD.cols),
  }
}

const offsetShip = function ({ position: { x, y }, len, orientation }: CalcOffsetShipsArgs) {
  const OFFSET = 1
  const MIN = 0
  const MAX_X = BOARD.cols
  const MAX_Y = BOARD.rows

  let x1 = x - OFFSET
  let y1 = y - OFFSET

  if (x1 < MIN) x1 += 1
  if (y1 < MIN) y1 += 1

  let x2 = x + len
  let y2 = y + OFFSET

  if (orientation === "vertical") {
    x2 = x + OFFSET
    y2 = y + len
  }

  if (x2 > MAX_X) x2 -= 1
  if (y2 > MAX_Y) y2 -= 1

  return { x1, x2, y1, y2 }
}

const arePositionsTooClose = function (prevPos: Position, nextPos: Position, len: number) {
  const ship1 = offsetShip({ position: prevPos, len })
  const ship2 = offsetShip({ position: nextPos, len })

  console.log({ ship2, ship1 })

  const tooCloseX = ship1.x1 <= ship2.x2 && ship1.x2 >= ship2.x1
  const tooCloseY = ship1.y1 <= ship2.y2 && ship1.y2 >= ship2.y1

  return tooCloseX && tooCloseY
}

export const getTinyShipPositionsCPU = function () {
  const tinyShips: Position[] = []

  for (let i = 1; i <= SHIPS_COUNT.tiny; i++) {
    let newPos: Position

    do {
      newPos = randomPositions()
    } while (tinyShips.some(prevPos => arePositionsTooClose(prevPos, newPos, SHIPS_SIZE.tiny)))

    tinyShips.push(newPos)
  }

  console.log("****************************************")
  console.log("****************************************")
  console.log("****************************************")

  return tinyShips
}
