import { SHIPS_SIZE } from "../../configs/setup"
import { arePositionsTooClose, randomPositions } from "../getShips"

test("get Random Positions", () => {
  const pos_1 = randomPositions()

  expect(pos_1).toMatchObject({
    x: expect.any(Number),
    y: expect.any(Number),
  })

  expect(pos_1.x).toBeGreaterThanOrEqual(0)
  expect(pos_1.x).toBeLessThanOrEqual(10)

  expect(pos_1.y).toBeGreaterThanOrEqual(0)
  expect(pos_1.y).toBeLessThanOrEqual(9)
})

describe("check tiny ships close to each other", () => {
  it("Should first two ships too close", () => {
    const pos_1: Position = { x: 1, y: 1 }
    const pos_2: Position = { x: 2, y: 1 }
    const ships_check = arePositionsTooClose(pos_1, pos_2, SHIPS_SIZE.tiny)
    expect(ships_check).toBeTruthy()
  })

  it("Should second two ships not too close and can be place in board", () => {
    const pos_1: Position = { x: 6, y: 1 }
    const pos_2: Position = { x: 2, y: 1 }
    const ships_check = arePositionsTooClose(pos_1, pos_2, SHIPS_SIZE.tiny)
    expect(ships_check).toBeFalsy()
  })
})
