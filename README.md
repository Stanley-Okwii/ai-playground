# AI-PLAYGROUND

This is an immerse AI creative playground, with tailored prompts. Free free to try it out here: [Live Demo](https://ai-playground-wine.vercel.app) 

## Pre-requisites

- Node v18.15.0 (Can be downloaded [here](https://nodejs.org/download/release/v18.15.0/)). Download a `.pkg` file to install Node on MacOS.

## How to Run

- Clone this repository, run `git clone https://github.com/Stanley-Okwii/ai-playground.git`
- Run `npm install` to install project dependencies
- Create the `.env.local` file in the root of the project, and copy over the variables from `template.env.local`. Add your `NEXT_PUBLIC_OPENAI_API_KEY` and `NEXT_PUBLIC_ORGANIZATION` values to the `.env.local`. These values can be got from https://platform.openai.com/account/api-keys
- Run `npm run dev` to start the server


## Assumptions
- Users are familiar with chatgpt model and its configuration
- The Frequently used prompts is dynamically populated from the top 5 list of prompts used for that day.

## Decisions and Why

- I used a streaming API instead of usual Rest API that returns JSON data because * Lower memory usage: Because data is sent to the client in small chunks, there is no need to buffer the entire response in memory before sending it. This can lead to lower memory usage and better overall performance, particularly for large responses.And Faster response times: By sending data to the client as soon as it becomes available, streams can reduce the amount of time it takes to send a response back to the client. This can lead to faster response times and better user experiences.
- 

