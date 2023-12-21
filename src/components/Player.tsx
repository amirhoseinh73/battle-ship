import { StyleSheet, Text, View } from "react-native"
import { Houses } from "../configs/setup"
import House from "./House"

const Player = function ({ title }: { title: string }) {
  const houses = Array(Houses).fill(null)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {houses.map((_house, idx) => (
          <House key={idx} />
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 50,
  },

  title: {
    width: `${100}%`,
  },
})

export default Player
