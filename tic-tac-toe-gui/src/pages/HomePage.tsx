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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <UserInfo />
      <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-2xl space-y-6 text-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={
                msg.sender === "user"
                  ? "text-right text-blue-600 dark:text-blue-400"
                  : "text-left text-green-600 dark:text-green-400"
              }
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default HomePage;
