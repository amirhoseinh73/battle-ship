import { randomPositions } from "../getShips"

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
