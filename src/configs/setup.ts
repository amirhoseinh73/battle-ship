export enum BOARD {
  x = 10,
  y = 9,
}

export enum SHIPS_COUNT {
  large = 1,
  medium = 2,
  small = 3,
  tiny = 4,
}

export enum SHIPS_SIZE {
  large = 4,
  medium = 3,
  small = 2,
  tiny = 1,
}

export const PLAYERS = {
  CPU: "CPU",
  USER: "YOU",
} as const
