import { useEffect, useState } from "react";

import { data } from "../data";

interface FrequentPromptProps {
  setInputValue: (value: string) => void;
  sendRequest: () => void;
}

export const FrequentPrompts = ({
  setInputValue,
  sendRequest,
}: FrequentPromptProps) => {
  const [text, setText] = useState<string>("");
  const { prompts } = data;

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        sendRequest();
      }, 500);
    }
  }, [text]);

  return (
    <>
      {prompts.map(({ id, text }) => (
        <button
          key={id}
          onClick={() => {
            setInputValue(text);
            setText(text);
          }}
          className="block hover:cursor-pointer max-w-sm p-3 mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
        </button>
      ))}
    </>
  );
};
