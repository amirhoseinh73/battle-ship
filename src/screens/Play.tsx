import { StyleSheet, View } from "react-native"
import BorderedButton from "../components/Button"
import Player from "../components/Player"

const Play = function ({
  setShowPlayScreen,
}: {
  setShowPlayScreen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const players = [0, 1]

  return (
    <View style={styles.container}>
      {players.map(player => (
        <View key={player} style={styles.marginVert}>
          <Player title={`Player ${player + 1}`} />
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  marginVert: {
    marginTop: "auto",
  },
  surrender: {
    marginTop: "auto",
  },
})

export default Play
