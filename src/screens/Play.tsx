import { StyleSheet, Text, View } from "react-native"

const Play = function () {
  return (
    <View style={styles.container}>
      <View>
        <Text>Player 1</Text>
      </View>
      <View>
        <Text>Player 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})

export default Play
