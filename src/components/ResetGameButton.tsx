import type { Player } from "../types";

interface ResetGameButtonProps {
  onClick: () => void;
  winner: Player | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ResetGameButton = ({ onClick, winner }: ResetGameButtonProps) => {
  //TODO: add styling for winner

  return (
    <button className="btn btn-outline-secondary mt-4 btn-lg" onClick={onClick}>
      Restart / New Game
    </button>
  );
};

export default ResetGameButton;
