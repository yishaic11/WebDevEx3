import type { CellValue, Winner } from "../types";

const WINNING_COMBINATIONS = [
  //rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares: CellValue[]): Winner => {
  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;

    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    ) {
      return {
        winner: squares[first],
        winningLine: [first, second, third],
      };
    }
  }

  return { winner: null, winningLine: null };
};
