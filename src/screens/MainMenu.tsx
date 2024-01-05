import React from "react"
import { StyleSheet, Text, View } from "react-native"
import BorderedButton from "../components/BorderedButton"

const MainMenu = function ({
  setShowPlayScreen,
}: {
  setShowPlayScreen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const onPress = () => setShowPlayScreen(true)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battle Ships!</Text>
      <BorderedButton title="Start Game" onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "900",
    marginBottom: "auto",
  },
})

export default MainMenu
