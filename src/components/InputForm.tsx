interface InputFormProps {
  isLoading: Boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  sendRequest: () => void;
}

export const InputForm = ({
  isLoading,
  setInputValue,
  inputValue,
  sendRequest,
}: InputFormProps) => (
  <form className="space-y-6" method="POST">
    <div>
      <label
        htmlFor="prompt-text-area"
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        Ask me anything...
      </label>
      <div className="mt-2">
        <textarea
          id="prompt-text-area"
          name="textarea"
          placeholder="Write your prompt here..."
          required
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          rows={2}
          style={{ resize: "none" }}
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div>
      <button
        type="button"
        className={`flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${isLoading && 'cursor-not-allowed'} `}
        onClick={() => sendRequest()}
        disabled={!!isLoading}
      >
        {isLoading ? "Processing" : "Send"}
        {isLoading && (
          <span className="relative self-center ml-1.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        )}
      </button>
    </div>
  </form>
);
