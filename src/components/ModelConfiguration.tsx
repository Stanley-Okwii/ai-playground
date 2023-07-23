import { modelList } from "../data";

interface ModelConfigurationProps {
  modelVersion: String;
  temperature: Number;
  maxTokenNumber: Number;
  setModelVersion: (value: String) => void;
  setTemperature: (value: Number) => void;
  setMaxTokenNumber: (value: Number) => void;
}

export const ModelConfiguration = ({
  modelVersion,
  temperature,
  maxTokenNumber,
  setModelVersion,
  setTemperature,
  setMaxTokenNumber,
}: ModelConfigurationProps) => (
  <>
    <div className="p-2">
      <div>Models</div>
      <label
        htmlFor="model_versions"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a model version
      </label>
      <select
        id="model_versions"
        defaultValue={`${modelVersion}`}
        onChange={(event) => setModelVersion(event.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {modelList.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
    <div className="p-2">
      <div>Temperature</div>
      <div>
        <label
          htmlFor="temperatureRange"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Select temperate
        </label>
        <input
          type="range"
          onChange={(event) => setTemperature(Number(event.target.value))}
          className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200 focus:outline-none focus:bg-white focus:border-gray-500"
          min="0"
          max="2"
          step="0.1"
          value={`${temperature}`}
          id="temperatureRange"
        />
      </div>
    </div>
    <div className="p-2">
      <div>Maximum Tokens</div>
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          type="number"
          onChange={(event) => setMaxTokenNumber(Number(event.target.value))}
          className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="maxTokens"
          value={`${maxTokenNumber}`}
        />
      </div>
    </div>
  </>
);
