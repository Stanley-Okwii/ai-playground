"use client";

import { useState } from "react";

import {
  ErrorAlert,
  InputForm,
  FrequentPrompts,
  Header,
  ModelConfiguration,
} from "../components";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<String>("");
  const [modelVersion, setModelVersion] = useState<String>("gpt-3.5-turbo");
  const [temperature, setTemperature] = useState<Number>(1);
  const [maxTokenNumber, setMaxTokenNumber] = useState<Number>(100);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [response, setResponse] = useState<String>("");

  const sendRequest = async () => {
    setResponse("");
    setIsLoading(true);
    let response: any = {};

    try {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_OPENAI_BASE_API_URL}/v1/chat/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              process.env.NEXT_PUBLIC_OPENAI_API_KEY || ""
            }`,
            Organization: process.env.NEXT_PUBLIC_ORGANIZATION || "",
          },
          body: JSON.stringify({
            model: modelVersion,
            stream: true,
            temperature,
            max_tokens: maxTokenNumber,
            messages: [{ role: "user", content: inputValue, name: "user" }],
          }),
        }
      );
    } catch (e) {
      setError(`${e}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }

    if (!response.ok) {
      setError(response.statusText);
      setIsLoading(false);
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const textDecoder = new TextDecoder();
    let isStreaming: Boolean = false;

    while (!isStreaming) {
      const { value, done } = await reader.read();
      isStreaming = done;
      const streamChunk = textDecoder.decode(value);
      const chunks = streamChunk.split("\n");

      chunks.forEach((value: string) => {
        if (value && value !== "data: [DONE]") {
          const data = JSON.parse(value.substring(6));
          const {
            choices: [
              {
                delta: { content },
              },
            ],
          } = data;
          setResponse((prev) => prev + (content || ""));
        }
      });
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex min-h-full flex-col px-6 lg:px-8">
            <h4 className="text-2xl font-bold dark:text-white">
              Frequently used prompts
            </h4>
            <FrequentPrompts {...{ setInputValue, sendRequest }} />
          </div>
          <div className="flex min-h-full flex-col px-6 lg:px-8">
            <h4 className="text-2xl font-bold dark:text-white">
              AI Playground
            </h4>
            <InputForm
              {...{ isLoading, setInputValue, inputValue, sendRequest }}
            />
            {response && (
              <>
                <span>Response: </span>
                <div className="mt-4 rounded-xl border bg-white p-4 shadow-md transition hover:bg-gray-100 text-gray-500">
                  {response}
                </div>
              </>
            )}
            <ErrorAlert {...{ error, setError }} />
          </div>
          <div className="flex min-h-full flex-col px-6 lg:px-8">
            <h4 className="text-2xl font-bold dark:text-white">
              Model Configurations
            </h4>
            <ModelConfiguration
              {...{
                modelVersion,
                temperature,
                maxTokenNumber,
                setModelVersion,
                setTemperature,
                setMaxTokenNumber,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
