import "./App.css";
import GamePageHeader from "./components/GamePageHeader";
import GameStatusText from "./components/GameStatusText";
import GameBoard from "./components/styled/GameBoard";
import BoardCell from "./components/styled/BoardCell";
import ResetGameButton from "./components/ResetGameButton";

const App = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <GamePageHeader />
          <GameStatusText statusText={"place holder"} />

          <GameBoard
            role="grid"
            aria-label="Tic Tac Toe board"
            className="mx-auto"
          >
            {Array(9)
              .fill(null)
              .map((value, index) => {
                const disabled = Boolean(value);

                return (
                  <BoardCell
                    key={index}
                    type="button"
                    onClick={() => {
                      // TODO: move logic
                    }}
                    disabled={disabled}
                    role="gridcell"
                    aria-label={`Cell ${index + 1}${value ? `: ${value}` : ""}`}
                  >
                    {value}
                  </BoardCell>
                );
              })}
          </GameBoard>

          <ResetGameButton
            onClick={() => {
              // TODO: reset game logic
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
