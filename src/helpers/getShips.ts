import { BOARD, SHIPS_SIZE } from "../configs/setup"
import { genrateRandNum } from "./global"

type CalcOffsetShipsArgs = {
  position: Position
  len: SHIPS_SIZE
  orientation?: ShipOrientation
}

export const randomPositions = function () {
  return {
    x: genrateRandNum(BOARD.rows),
    y: genrateRandNum(BOARD.cols),
  } as Position
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

export const arePositionsTooClose = function (
  prevPos: Position,
  nextPos: Position,
  len: SHIPS_SIZE
) {
  const ship1 = offsetShip({ position: prevPos, len })
  const ship2 = offsetShip({ position: nextPos, len })

  const tooCloseX = ship1.x1 <= ship2.x2 && ship1.x2 >= ship2.x1
  const tooCloseY = ship1.y1 <= ship2.y2 && ship1.y2 >= ship2.y1

  return tooCloseX && tooCloseY
}
