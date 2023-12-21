import { StyleSheet, Text, View } from "react-native"
import Button from "../components/Button"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import Play from "./Play"

const Home = function () {
  const [showPlayScreen, setShowPlayScreen] = useState(false)

  const onPress = function () {
    setShowPlayScreen(prevState => !prevState)
  }

  return (
    <>
      {showPlayScreen ? (
        <Play />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Battle Ships!</Text>
          <Button title="Start Game" onPress={onPress} />
          <StatusBar style="auto" />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    paddingTop: 40,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "900",
    marginBottom: "auto",
  },
})

export default Home
