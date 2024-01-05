import { genrateRandNum } from "../global"

test("get Random Positions", () => {
  const nums = [10, 8, 20, 32]

  for (const num of nums) {
    const randomNum = genrateRandNum(num)

    expect(randomNum).toBeGreaterThanOrEqual(0)
    expect(randomNum).toBeLessThanOrEqual(num)
  }
})
