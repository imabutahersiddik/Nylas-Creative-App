import React, { useState } from 'react';
import { sendEmail } from '../utils/api';
import { getEmailSummary } from '../utils/ai';

const Compose = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [summary, setSummary] = useState('');

    const handleSend = async () => {
        await sendEmail({ subject, body });
        alert('Email sent!');
    };

    const handleSummarize = async () => {
        const summaryText = await getEmailSummary(body);
        setSummary(summaryText);
    };

    return (
        <div className="compose">
            <h2>Compose Email</h2>
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button onClick={handleSend}>Send Email</button>
            <button onClick={handleSummarize}>Summarize Email</button>
            {summary && <div className="summary"><h4>Summary:</h4><p>{summary}</p></div>}
        </div>
    );
};

export default Compose;
