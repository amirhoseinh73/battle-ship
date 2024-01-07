import React from "react"
import renderer, { ReactTestRenderer } from "react-test-renderer"
import BorderedButton from "../BorderedButton"

test("renders correctly BorderedButton", () => {
  const onPressMock = jest.fn()

  const btnWithText: ReactTestRenderer = renderer.create(
    <BorderedButton title="test" onPress={onPressMock} />
  )
  expect(btnWithText.toJSON()).toMatchSnapshot()

  const btnWithoutText = renderer.create(<BorderedButton title="" onPress={onPressMock} />).toJSON()
  expect(btnWithoutText).toMatchSnapshot()

  btnWithText.root.props.onPress()
  expect(onPressMock).toHaveBeenCalled()
})
