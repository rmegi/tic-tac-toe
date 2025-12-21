import React from "react";

type BoardProps = {
  board: string[];
  onCellClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div className="w-full max-w-[60vmin] mx-auto">
      <div className="grid grid-cols-3 aspect-square gap-3">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => onCellClick(index)}
            className="
              w-full h-full
              flex items-center justify-center
              bg-gray-100 dark:bg-gray-700
              border-4 border-gray-900 dark:border-gray-300
              text-[clamp(3rem,8vw,6rem)]
              font-bold
              hover:bg-gray-200 dark:hover:bg-gray-600
              transition
            "
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
