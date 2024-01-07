type ShipNames = "tiny" | "small" | "medium" | "large"

type ShipDestroyed = "tinyD" | "smallD" | "mediumD" | "largeD"

type BoardFills = "blank" | ShipNames // "fill" | "hit" | ShipDestroyed

type ShipOrientation = "vertical" | "horizontal"

type Position = {
  x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  y: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}
