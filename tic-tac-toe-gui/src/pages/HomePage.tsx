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

  const handleSend = async (message: string) => {
    console.log("Message sent:", message);

    setMessages((prev) => [...prev, { sender: "user", text: message }]);

    const reply = await askCoach(backendUrl, message);

    if (reply !== null) {
      setMessages((prev) => [...prev, { sender: "coach", text: reply }]);
    } else {
      setMessages((prev) => [
        ...prev,
        { sender: "coach", text: "Sorry, I couldn’t fetch a response." },
      ]);
    }
  };

  return <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6"></div>;
};

export default HomePage;
