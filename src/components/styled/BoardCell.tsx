import styled from "styled-components";

const BoardCell = styled.button<{
  $win: boolean;
  $player: string | null;
}>`
  width: 7rem;
  height: 7rem;
  border-radius: 1rem;
  border: 0.25rem solid #212529;
  background: #fff;
  font-size: 3rem;
  font-weight: 800;
  cursor: pointer;
  color: ${({ $player }) => ($player === "X" ? "#dc3545" : "#0d6efd")};

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.95;
  }

  ${({ $win, $player }) =>
    $win &&
    ($player === "X"
      ? `
      outline: 0.35rem solid #dc3545;
      background: rgba(220, 53, 69, 0.05);
      border: 0rem;
    `
      : `
      outline: 0.35rem solid #0d6efd;
      background: rgba(13, 110, 253, 0.05);
      border: 0rem;
    `)}
`;

export default BoardCell;