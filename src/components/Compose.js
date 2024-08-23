import React, { useState } from 'react';
import { sendEmail } from '../utils/api';
import { getEmailSummary } from '../utils/ai';
import './Compose.css'; // Import the CSS for styling

const Compose = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        setLoading(true);
        try {
            await sendEmail({ subject, body });
            alert('Email sent successfully!');
            setSubject('');
            setBody('');
            setSummary('');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        } finally {
            setLoading(false);
        }
    };

    const handleSummarize = async () => {
        setLoading(true);
        try {
            const summaryText = await getEmailSummary(body);
            setSummary(summaryText);
        } catch (error) {
            console.error('Error summarizing email:', error);
            alert('Failed to summarize email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="compose">
            <h2>Compose Email</h2>
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={loading}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
                {loading ? 'Sending...' : 'Send Email'}
            </button>
            <button onClick={handleSummarize} disabled={loading}>
                {loading ? 'Summarizing...' : 'Summarize Email'}
            </button>
            {summary && (
                <div className="summary">
                    <h4>Summary:</h4>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default Compose;