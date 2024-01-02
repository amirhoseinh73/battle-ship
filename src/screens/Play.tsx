import { StyleSheet, View } from "react-native"
import BorderedButton from "../components/Button"
import Player from "../components/Player"
import { PLAYERS } from "../configs/setup"

const Play = function ({
  setShowPlayScreen,
}: {
  setShowPlayScreen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const players = [0, 1]

  return (
    <View style={styles.container}>
      {players.map(player => (
        <View key={player} style={[styles.player, styles[`player${player}`]]}>
          <Player title={player === 0 ? PLAYERS.CPU : PLAYERS.USER} />
        </View>
      ))}

      <View style={styles.surrender}>
        <BorderedButton title="Surrender" onPress={() => setShowPlayScreen(false)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  player: {
    // width: 11 * 32,
    // height: 12 * 25,
    paddingVertical: 5,
    paddingHorizontal: "6%",
    margin: 0,
    justifyContent: "center",
  },
  player0: {
    marginTop: "auto",
  },
  player1: {
    marginTop: 5,
  },
  surrender: {
    marginTop: 10,
  },
})

export default Play
