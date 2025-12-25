import React from "react";

type AiThinkingLoaderProps = {
  text?: string;
};

const AiThinkingLoader: React.FC<AiThinkingLoaderProps> = ({
  text = "AI is thinking",
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-7xl">
      <div className="animate-pulse">🧠</div>
      <div className="flex items-center font-medium text-gray-700 dark:text-gray-200">
        {text}
        <span className="ml-2 flex">
          <span className="animate-bounce [animation-delay:0ms]">.</span>
          <span className="animate-bounce [animation-delay:150ms]">.</span>
          <span className="animate-bounce [animation-delay:300ms]">.</span>
        </span>
      </div>
    </div>
  );
};

export default AiThinkingLoader;
