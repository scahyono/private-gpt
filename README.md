# Private GPT

Private GPT is a ChatGPT application that stores your API Key and messages in your local database in Chrome/Edge. This ensures that your data remains private and secure.

![image](https://github.com/scahyono/privategpt/assets/2072698/a8cf5d0b-91ae-4416-8c1c-2026ec1631e2)

## Demo

You can try out Private GPT at [https://privategpt.netlify.app/](https://privategpt.netlify.app/).

## Usage

1. Obtain your 3-months-FREE OpenAI API Key from [OpenAI's API platform](https://platform.openai.com/).
2. Enter your OpenAI API Key and click on the "Store API Key" button.
3. Type your message and click on the up arrow button to send it.
4. The application will display the API response in the message list.
5. You can clear all messages by clicking on the trash bin button.

## Local Setup and Testing with Netlify

1. Install Node.js and npm if you haven't already. You can download them from [here](https://nodejs.org/).

2. Install Netlify CLI globally using npm:

    ```bash
    npm install netlify-cli -g
    ```

3. Clone the repository and navigate into the project directory:

    ```bash
    git clone https://github.com/your-repo/private-gpt.git
    cd private-gpt
    ```

4. Install the project dependencies:

    ```bash
    npm install
    ```

5. Start the local development server:

    ```bash
    netlify dev
    ```

Now, you can access the application at `http://localhost:8888`.

Netlify Functions can be tested locally using the same `netlify dev` command. The functions are available under the `/.netlify/functions/` path. For example, if you have a function named `callOpenAi`, you can test it by sending a request to `http://localhost:8888/.netlify/functions/callOpenAi`.

Remember to replace `your-repo` with your actual GitHub username and repository name.

Next steps:
- Follow the instructions to set up and test the application locally.
- Check if the application and Netlify functions work as expected.
- Adjust the instructions as needed.

## About

This project is developed by [Wishful.AI](https://www.wishful.ai/), a company dedicated to creating AI solutions that respect user privacy.

## License

This project is licensed under the MIT License.
