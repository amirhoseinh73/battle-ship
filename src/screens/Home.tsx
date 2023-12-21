import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import Play from "./Play"
import BorderedButton from "../components/Button"

const Home = function () {
  const [showPlayScreen, setShowPlayScreen] = useState(false)

  const onPress = () => setShowPlayScreen(true)

  return (
    <>
      {showPlayScreen ? (
        <Play setShowPlayScreen={setShowPlayScreen} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Battle Ships!</Text>
          <BorderedButton title="Start Game" onPress={onPress} />
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
