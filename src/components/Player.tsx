import React from "react"
import { StyleSheet, Text, View } from "react-native"
import House from "./House"
import { BOARD } from "../configs/setup"
import { getShips } from "./playerHelper"

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
          rows.map((cols, idy) => <House key={idy} houseType={cols} id={idx + "-" + idy} />)
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
