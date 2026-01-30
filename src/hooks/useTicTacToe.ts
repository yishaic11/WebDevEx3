import { useState, useMemo, useCallback } from "react";
import type { CellValue, GameStatus } from "../types";
import { checkWinner } from "../utils/gameLogic";

export const useTicTacToe = () => {
  const [squares, setSquares] = useState<CellValue[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const gameStatus: GameStatus = useMemo(() => {
    const { winner, winningLine } = checkWinner(squares);
    const isBoardFull = squares.every((square) => square !== null);
    const isDraw = !winner && isBoardFull;

    return { winner, winningLine, isDraw };
  }, [squares]);

  const makeMove = useCallback(
    (index: number) => {
      if (gameStatus.winner || squares[index]) {
        return;
      }

      const newSquares = squares.slice();
      newSquares[index] = isXTurn ? "X" : "O";
      
      setSquares(newSquares);
      setIsXTurn(!isXTurn);
    },
    [squares, isXTurn, gameStatus.winner],
  );

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }, []);

  return {
    squares,
    isXTurn,
    gameStatus,
    makeMove,
    resetGame,
  };
};
