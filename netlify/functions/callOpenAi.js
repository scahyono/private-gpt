const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { prompt, apiKey } = JSON.parse(event.body);

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 60
        })
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
