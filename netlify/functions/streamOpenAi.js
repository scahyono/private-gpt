const fetch = require('node-fetch');
const { PassThrough } = require('stream');

exports.handler = async (event) => {
    const { prompt, apiKey } = JSON.parse(event.body);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.7,
            "stream": true,
        })
    });

    const passThrough = new PassThrough();
    response.body.pipe(passThrough);

    return {
        statusCode: 200,
        body: passThrough,
        headers: { 'Content-Type': 'application/json' },
        isBase64Encoded: true
    };
};