import React, { useState } from "react";
import Board from "../features/board/board";
import AiThinkingLoader from "../features/loader/loader";

const API_URL = "http://localhost:8000"; // adjust if needed

const HomePage: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [loading, setLoading] = useState(false);

  const handleCellClick = async (i: number) => {
    if (board[i] !== "" || loading) return;

    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);

    const boardState = newBoard.join(",");

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/play/${boardState}`);
      const data = await res.json();

      const aiMoveIndex = parseInt(data.response, 10);
      if (typeof aiMoveIndex === "number" && newBoard[aiMoveIndex] === "") {
        const aiBoard = [...newBoard];
        aiBoard[aiMoveIndex] = "O";
        setBoard(aiBoard);
      }
    } catch (err) {
      console.error("❌ Error calling backend:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 p-6">
      <Board board={board} onCellClick={handleCellClick} />
      {loading && <AiThinkingLoader />}
    </div>
  );
};

export default HomePage;
