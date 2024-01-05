import React from "react"
import { useState } from "react"
import Play from "./Play"
import MainMenu from "./MainMenu"

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
