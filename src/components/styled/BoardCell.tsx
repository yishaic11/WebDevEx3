import styled from "styled-components";

export const BoardCell = styled.button<{
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

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.95;
  }
`;

export default BoardCell;
