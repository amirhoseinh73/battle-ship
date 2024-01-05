import React from "react"
import renderer from "react-test-renderer"
import House from "../House"

test("renders correctly House", () => {
  const emptyHouse = renderer.create(<House fillType={"blank"} id="1-1" isShip={false} />).toJSON()
  const tinyShipHouse = renderer.create(<House fillType={"tiny"} id="1-2" isShip={true} />).toJSON()

  expect(emptyHouse).toMatchSnapshot()
  expect(tinyShipHouse).toMatchSnapshot()
})
