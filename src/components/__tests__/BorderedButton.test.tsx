import React from "react"
import renderer from "react-test-renderer"
import BorderedButton from "../BorderedButton"

test("renders correctly BorderedButton", () => {
  const btn = renderer.create(<BorderedButton title="test" />).toJSON()
  expect(btn).toMatchSnapshot()
})
