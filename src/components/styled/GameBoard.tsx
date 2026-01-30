import styled from "styled-components";

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7rem);
  grid-template-rows: repeat(3, 7rem);
  gap: 1rem;
  width: fit-content;
`;

export default GameBoard;