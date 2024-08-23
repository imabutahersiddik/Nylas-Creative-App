import React, { useEffect, useState } from 'react';
import EmailList from '../components/EmailList';
import { fetchEmails } from '../utils/api';

const Dashboard = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const loadEmails = async () => {
            const emailData = await fetchEmails();
            setEmails(emailData);
        };
        loadEmails();
    }, []);

    return (
        <div className="dashboard">
            <h2>Your Emails</h2>
            <EmailList emails={emails} />
        </div>
    );
};

export default Dashboard;
