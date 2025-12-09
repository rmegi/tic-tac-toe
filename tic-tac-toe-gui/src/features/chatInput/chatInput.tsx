import React, { useState, useRef } from "react";

interface Props {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<Props> = ({ onSend }) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input.trim());
      setInput("");
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2 border-t border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
      <textarea
        ref={textareaRef}
        className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Send a message..."
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        disabled={input.trim() === ""}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
