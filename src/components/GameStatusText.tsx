import type { Player } from "../types";

interface GameStatusTextProps {
  statusText: string;
  winner: Player | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GameStatusText = ({ statusText, winner }: GameStatusTextProps) => {
  //TODO: add styling for winner
  return (
    <header className="mb-4">
      <h1 className={`lead fw-bold`}>{statusText}</h1>
    </header>
  );
};

export default GameStatusText;
