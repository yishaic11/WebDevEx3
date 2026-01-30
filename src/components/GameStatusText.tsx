interface GameStatusTextProps {
  statusText: string;
}

const GameStatusText = ({ statusText }: GameStatusTextProps) => {
  return (
    <header className="mb-4">
      <h1 className={`lead fw-bold`}>{statusText}</h1>
    </header>
  );
};

export default GameStatusText;
