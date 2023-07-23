# AI-PLAYGROUND

This is an immerse AI creative playground, with tailored prompts. Free free to try out the [Live Demo](https://ai-playground-wine.vercel.app) 

## Pre-requisites

- Node v18.15.0 (Can be downloaded [here](https://nodejs.org/download/release/v18.15.0/)). Download a `.pkg` file to install Node on MacOS.

## How to Run

- Clone this repository, run `git clone https://github.com/Stanley-Okwii/ai-playground.git`
- Run `npm install` to install project dependencies
- Create the `.env.local` file in the root of the project, and copy over the variables from `template.env.local`. Add your `NEXT_PUBLIC_OPENAI_API_KEY` and `NEXT_PUBLIC_ORGANIZATION` values to the `.env.local`. These values can be got from https://platform.openai.com/account/api-keys
- Run `npm run dev` to start the server

## Assumptions
- Users possess familiarity with the ChatGPT model and its configuration..
- The Frequently Used Prompts feature is dynamically populated, pulling the top 5 prompts from the daily usage data.

## Decisions made and Why

- Implemented a streaming API instead of a typical REST API that deliver JSON data, resulting in lower memory usage(on the backend server) and faster response times(as data becomes available its rendered, instead of waiting for huge JSON response).
- Implemented a `try-catch` statement to handle errors that may occur when the API call fails, ensuring graceful error handling.
- Utilized environment variables to safeguard sensitive information, such as API secrets, enhancing security.
- Employed components to manage the rendering of specific UI elements, promoting code modularity and maintainability.
- Defined Interfaces for each component's props, ensuring proper usage and type-checking of props throughout the application, thereby enhancing code reliability and preventing potential errors.
