import React from "react"
import { Text, StyleSheet, Pressable, GestureResponderEvent, View } from "react-native"

type BtnProps = {
  title: string
  onPress?: (event: GestureResponderEvent) => void
} & Record<string, unknown>

const BorderedButton = function (props: BtnProps) {
  const { onPress, title = "Start", ...rest } = props

  // console.log(rest)

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 10,
    marginBottom: "auto",
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 22,
    elevation: 0,
    backgroundColor: "inherit",
    borderColor: "#245bdc",
    borderStyle: "dashed",
    borderWidth: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
})

export default BorderedButton
