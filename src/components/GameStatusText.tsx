import type { Player } from "../types";

interface GameStatusTextProps {
  statusText: string;
  winner: Player | null;
}

const GameStatusText = ({ statusText, winner }: GameStatusTextProps) => {
  const getTextColorClass = () => {
    if (winner === "X") return "text-danger fw-bold";
    if (winner === "O") return "text-primary fw-bold";
    return "text-secondary fw-bold";
  };

  return (
    <header className="mb-4">
      <h1 className={`lead ${getTextColorClass()}`}>{statusText}</h1>
    </header>
  );
};

export default GameStatusText;
