interface ResetGameButtonProps {
  onClick: () => void;
}

const ResetGameButton = ({ onClick }: ResetGameButtonProps) => {
  return (
    <button className="btn btn-outline-secondary mt-4 btn-lg" onClick={onClick}>
      Restart / New Game
    </button>
  );
};

export default ResetGameButton;
