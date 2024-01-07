import { SHIPS_COUNT } from "../../configs/setup"
import { getShips } from "../playerHelper"

describe("get all ships of a player in board", () => {
  it(`should has ${SHIPS_COUNT.tiny} tiny ships`, () => {
    const { tinyShips } = getShips()

    expect(tinyShips).toHaveLength(SHIPS_COUNT.tiny)

    tinyShips.forEach(item => {
      expect(item).toMatchObject({
        x: expect.any(Number),
        y: expect.any(Number),
      })
    })
  })
})
