import { BOARD, SHIPS_COUNT, SHIPS_SIZE } from "../configs/setup"

type CalcOffsetShipsArgs = {
  x: number
  y: number
  len: number
  orientation?: ShipOrientation
}

const randomPositions = function () {
  return Math.floor(Math.random() * BOARD.x * BOARD.y) + 1
}

const offsetShip = function ({ x: xStart, y: yStart, len, orientation }: CalcOffsetShipsArgs) {
  const x1 = xStart - 1
  const y1 = yStart - 1

  let x2 = x1 + len + 1,
    y2 = y1 + 2

  if (orientation === "vertical") {
    x2 = x1 + 2
    y2 = y1 + len + 1
  }

  return { x1, x2, y1, y2 }
}

const arePositionsTooClose = function (x1: number, y1: number, x2: number, y2: number) {
  const ship1 = offsetShip({ x: x1, y: y1, len: SHIPS_SIZE.tiny })
  const ship2 = offsetShip({ x: x2, y: y2, len: SHIPS_SIZE.tiny })

  console.log("===============================")
  console.log({ ship1, ship2 })

  const tooCloseX = ship1.x1 <= ship2.x2 && ship1.x2 >= ship2.x1
  const tooCloseY = ship1.y1 <= ship2.y2 && ship1.y2 >= ship2.y1

  return tooCloseX || tooCloseY
}

const tinyShipPositionsTooClose = (x: number, y: number) => arePositionsTooClose(x, x, y, y)

export const getTinyShipPositionsCPU = function () {
  const tinyShips: number[] = []

  for (let i = 1; i <= SHIPS_COUNT.tiny; i++) {
    let newPos: number

    do {
      newPos = randomPositions()
    } while (tinyShips.some(existingPos => tinyShipPositionsTooClose(newPos, existingPos)))

    tinyShips.push(newPos)
  }

  console.log("****************************************")
  console.log("****************************************")
  console.log("****************************************")

  return tinyShips as [number, number, number, number]
}
