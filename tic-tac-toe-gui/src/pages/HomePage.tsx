import React, { useState } from "react";
import UserInfo from "../features/userInfo/userInfo";
import ChatInput from "../features/chatInput/chatInput";
import { askCoach } from "../utils/askCoach";

interface Message {
  sender: "user" | "coach";
  text: string;
}

const HomePage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const backendUrl = "http://localhost:8000";

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
