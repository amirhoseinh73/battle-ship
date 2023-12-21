import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

const House = function () {
  const [isFill, setIsFill] = useState(false)

  const fillHouse = () => setIsFill(true)

  return (
    <Pressable
      style={[styles.house, isFill ? { backgroundColor: "red" } : { backgroundColor: "#aaa" }]}
      onPress={fillHouse}></Pressable>
  )
}

const styles = StyleSheet.create({
  house: {
    width: 32,
    height: 32,
    borderColor: "#111",
    borderWidth: 1,
    borderRadius: 3,
    margin: 1,
  },
})

export default House
