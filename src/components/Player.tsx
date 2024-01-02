import { StyleSheet, Text, View } from "react-native"
import House from "./House"
import { BOARD } from "../configs/setup"
import { getTinyShipPositionsCPU } from "../helpers/getShips"

const getShips = function () {
  const tinyShips: number[] = getTinyShipPositionsCPU()

  return {
    tinyShips,
  }
}

const Player = function ({ title }: { title: string }) {
  const { tinyShips } = getShips()

  const houses: BoardFills[] = Array(BOARD.x * BOARD.y).fill(null)

  for (const tiny of tinyShips) {
    houses[tiny] = "tiny"
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {houses.map((house, idx) => (
          <House key={idx} isShip={Boolean(house)} fillType={house} />
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
    // flex: 1,
  },

  title: {
    width: "100%",
    fontSize: 16,
  },
})

export default Player
