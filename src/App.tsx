import GamePageHeader from "./components/GamePageHeader";
import GameStatusText from "./components/GameStatusText";
import GameBoard from "./components/styled/GameBoard";
import BoardCell from "./components/styled/BoardCell";
import ResetGameButton from "./components/ResetGameButton";
import { useTicTacToe } from "./hooks/useTicTacToe";

const App = () => {
  const { squares, isXTurn, gameStatus, makeMove, resetGame } = useTicTacToe();

  const getStatusMessage = () => {
    if (gameStatus.winner) {
      return `Winner: ${gameStatus.winner}`;
    }
    if (gameStatus.isDraw) {
      return "Draw!";
    }
    return `Next turn: ${isXTurn ? "X" : "O"}`;
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <GamePageHeader />
          <GameStatusText
            statusText={getStatusMessage()}
            winner={gameStatus.winner}
          />

          <GameBoard
            role="grid"
            aria-label="Tic Tac Toe board"
            className="mx-auto"
          >
            {squares.map((value, index) => {
              const isWinningCell =
                gameStatus.winningLine?.includes(index) ?? false;
              const disabled = Boolean(gameStatus.winner) || Boolean(value);

              return (
                <BoardCell
                  key={index}
                  type="button"
                  onClick={() => makeMove(index)}
                  $win={isWinningCell}
                  $player={value}
                  disabled={disabled}
                  role="gridcell"
                  aria-label={`Cell ${index + 1}${value ? `: ${value}` : ""}`}
                >
                  {value}
                </BoardCell>
              );
            })}
          </GameBoard>

          <ResetGameButton onClick={resetGame} winner={gameStatus.winner} />
        </div>
      </div>
    </div>
  );
};

export default App;
