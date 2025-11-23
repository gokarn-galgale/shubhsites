// netlify/functions/ai_writer.js

exports.handler = async function(event, context) {
    // 1. Security: Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    // 2. Get the Prompt from the Website
    const body = JSON.parse(event.body);
    const promptText = body.prompt;

    // 3. Get your Secret Key from Netlify Settings (NOT Code)
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
        return { statusCode: 500, body: JSON.stringify({ error: "Server API Key missing" }) };
    }

    try {
        // 4. Call Google Gemini API from the Server
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }],
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
                ]
            })
        });

        const data = await response.json();

        // 5. Send the result back to your website
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};