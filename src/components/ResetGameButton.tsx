import type { Player } from "../types";

interface ResetGameButtonProps {
  onClick: () => void;
  winner: Player | null;
}

const ResetGameButton = ({ onClick, winner }: ResetGameButtonProps) => {
  const getButtonClass = () => {
    if (winner === "X") return "btn btn-danger mt-4 btn-lg";
    if (winner === "O") return "btn btn-primary mt-4 btn-lg";
    return "btn btn-outline-secondary mt-4 btn-lg";
  };

  return (
    <button className={getButtonClass()} onClick={onClick}>
      Restart / New Game
    </button>
  );
};

export default ResetGameButton;
