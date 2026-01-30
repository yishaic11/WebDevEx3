export type Player = "X" | "O";
export type CellValue = Player | null;

export type Winner = {
  winner: Player | null;
  winningLine: number[] | null;
};

export interface GameStatus {
  winner: Player | null;
  winningLine: number[] | null;
  isDraw: boolean;
}
