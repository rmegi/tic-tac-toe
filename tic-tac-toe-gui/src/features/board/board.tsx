import React from "react";

type BoardProps = {
  board: string[]; // ["X", "", "O", ...] length 9
  onCellClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] gap-3 mx-auto">
      {board.map((cell, index) => (
        <button
          key={index}
          className="
                        flex items-center justify-center 
                        bg-gray-100 dark:bg-gray-700
                        border-4 border-gray-900 dark:border-gray-300
                        text-6xl font-bold 
                        hover:bg-gray-200 dark:hover:bg-gray-600
                        transition
                    "
          onClick={() => onCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Board;
