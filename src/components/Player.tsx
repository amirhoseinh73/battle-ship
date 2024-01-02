import { StyleSheet, Text, View } from "react-native"
import House from "./House"
import { BOARD } from "../configs/setup"
import { getTinyShipPositionsCPU } from "../helpers/getShips"

const getShips = function () {
  const tinyShips: Position[] = getTinyShipPositionsCPU()

  return {
    tinyShips,
  }
}

const Player = function ({ title }: { title: string }) {
  const { tinyShips } = getShips()

  const houses: BoardFills[][] = Array.from({ length: BOARD.rows }, () =>
    Array(BOARD.cols).fill("blank")
  )

  for (const { x, y } of tinyShips) {
    houses[x][y] = "tiny"
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {houses.map((rows, idx) =>
          rows.map((cols, idy) => (
            // TODO: Must remove isShip attribute
            <House
              key={idy}
              isShip={cols === "blank" ? false : true}
              fillType={cols}
              id={idx + "-" + idy}
            />
          ))
        )}
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
