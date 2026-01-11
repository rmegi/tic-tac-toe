import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-800 p-6 text-white flex flex-col items-center">
      <h1 className="text-6xl font-bold mb-4">About Tic-Tac-Toe Game</h1>
      <div className="mt-5 text-center text-2xl">
        <p>
          This is a simple Tic-Tac-Toe game where you can play against an AI
          opponent. The AI uses basic strategies to challenge the player.
        </p>
        <p>
          Developed using React for the frontend and a backend API to handle AI
          moves.
        </p>
        <p>Enjoy playing!</p>
      </div>
      <div className="mt-auto text-2xl">
        <h1>Developed by Roy Megidish</h1>
      </div>
    </div>
  );
};

export default AboutPage;
