import { useState } from "react"
import Play from "./Play"
import MainMenu from "./MainMenu"
// import { StatusBar } from "react-native"

const Home = function () {
  const [showPlayScreen, setShowPlayScreen] = useState(false)

  return (
    <>
      {showPlayScreen ? (
        <Play setShowPlayScreen={setShowPlayScreen} />
      ) : (
        <MainMenu setShowPlayScreen={setShowPlayScreen} />
      )}
    </>
  )
}

export default Home
