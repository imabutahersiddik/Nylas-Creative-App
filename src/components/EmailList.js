import React from 'react';

const EmailList = ({ emails }) => {
    return (
        <div className="email-list">
            {emails.map(email => (
                <div key={email.id} className="email-item">
                    <h3>{email.subject}</h3>
                    <p>{email.snippet}</p>
                </div>
            ))}
        </div>
    );
};

export default EmailList;
