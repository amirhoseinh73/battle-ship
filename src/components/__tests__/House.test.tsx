import React from "react"
import renderer from "react-test-renderer"
import House from "../House"
import { render, fireEvent } from "@testing-library/react-native"
import "@testing-library/jest-native/extend-expect"

test("renders correctly House", () => {
  const emptyHouse = renderer.create(<House houseType={"blank"} id="1-1" />).toJSON()
  const tinyShipHouse = renderer.create(<House houseType={"tiny"} id="1-2" />).toJSON()

  expect(emptyHouse).toMatchSnapshot()
  expect(tinyShipHouse).toMatchSnapshot()
})

describe("check shot house", () => {
  it("should be empty house", () => {
    const { getByTestId } = render(<House houseType={"blank"} id="1-1" />)
    const houseComponent = getByTestId("house-component-shootable")

    expect(houseComponent).toHaveStyle({ backgroundColor: "#888" })

    fireEvent.press(houseComponent)
    expect(houseComponent).toHaveStyle({ backgroundColor: "#d80000" })
  })

  it("should be a ship in house", () => {
    const { getByTestId } = render(<House houseType={"tiny"} id="1-1" />)
    const houseComponent = getByTestId("house-component-shootable")

    expect(houseComponent).toHaveStyle({ backgroundColor: "#fbff00" })

    fireEvent.press(houseComponent)
    expect(houseComponent).toHaveStyle({ backgroundColor: "#6a0000" })
  })
})
