import axios from 'axios';

const AI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const AI_API_KEY = 'YOUR_OPENAI_API_KEY';

export const getEmailSummary = async (emailBody) => {
    const response = await axios.post(AI_API_URL, {
        prompt: `Summarize the following email: ${emailBody}`,
        max_tokens: 50,
    }, {
        headers: {
            'Authorization': `Bearer ${AI_API_KEY}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data.choices[0].text.trim();
};
