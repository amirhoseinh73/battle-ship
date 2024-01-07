import React from "react"
import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#a9a9a9",
  },
})
