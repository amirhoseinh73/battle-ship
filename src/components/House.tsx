import { useState } from "react"
import { Pressable, StyleSheet } from "react-native"

const getBackground = function (
  filled: boolean,
  isShip: boolean,
  shipKind: BoardFills = undefined,
  shipDestroyed = false
) {
  // hidden ships not hitted yet
  if (isShip && !filled) {
    if (shipKind === "tiny") return { backgroundColor: "#FFFF00" }
    if (shipKind === "small") return { backgroundColor: "green" }
    if (shipKind === "medium") return { backgroundColor: "orange" }
    if (shipKind === "large") return { backgroundColor: "brown" }
  }

  if (isShip && filled) return { backgroundColor: "lightblue" } // first hit

  // ship destroyed
  if (shipDestroyed) {
    if (shipKind === "tiny") return { backgroundColor: "#FFFF00" }
    if (shipKind === "small") return { backgroundColor: "green" }
    if (shipKind === "medium") return { backgroundColor: "orange" }
    if (shipKind === "large") return { backgroundColor: "brown" }
  }

  if (filled) return { backgroundColor: "red" }
  return { backgroundColor: "#888" }
}

const House = function ({
  isShip = false,
  fillType = null,
}: {
  isShip: boolean
  fillType: BoardFills
}) {
  const [isFill, setIsFill] = useState(false)

  const fillHouse = () => {
    if (isFill) return
    setIsFill(true)
  }

  return (
    <Pressable
      style={[styles.house, getBackground(isFill, isShip, fillType, false)]}
      onPress={fillHouse}
    />
  )
}

const styles = StyleSheet.create({
  house: {
    width: "9%",
    height: 32,
    aspectRatio: 1,
    borderRadius: 3,
    margin: 1,
  },
})

export default House
