import React, { useState } from "react";
import Board from "../features/board/board";

const HomePage: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const handleCellClick = (i: number) => {
    if (board[i] !== "") return;
    const newBoard = [...board];
    newBoard[i] = "X";
    console.log(newBoard);
    setBoard(newBoard);
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 p-6">
      <Board board={board} onCellClick={handleCellClick} />
    </div>
  );
};

export default HomePage;
