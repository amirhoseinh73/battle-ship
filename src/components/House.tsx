import React from "react"
import { useState } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

const getBackground = function (touched: boolean, houseType: BoardFills, shipDestroyed = false) {
  if (shipDestroyed) {
    if (houseType === "tiny") return { backgroundColor: "#666" }
    if (houseType === "small") return { backgroundColor: "#555" }
    if (houseType === "medium") return { backgroundColor: "#444" }
    if (houseType === "large") return { backgroundColor: "#333" }
  }

  if (touched) {
    if (houseType === "blank") return { backgroundColor: "#d80000" }

    return { backgroundColor: "#6a0000" }
  }

  if (houseType === "tiny") return { backgroundColor: "#fbff00" }
  if (houseType === "small") return { backgroundColor: "#ff00ea" }
  if (houseType === "medium") return { backgroundColor: "#00ff80" }
  if (houseType === "large") return { backgroundColor: "#3a00b7" }

  return { backgroundColor: "#888" }
}

const House = function ({ houseType, id }: { houseType: BoardFills; id: string }) {
  const [isTouched, setIsTouched] = useState(false)

  const fillHouse = () => {
    if (isTouched) return
    setIsTouched(true)
  }

  //TODO: Must Calculate how a ship destroyed
  return (
    <Pressable
      style={[styles.house, getBackground(isTouched, houseType, false)]}
      onPress={fillHouse}
      testID="house-component-shootable">
      <Text>{id}</Text>
    </Pressable>
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
