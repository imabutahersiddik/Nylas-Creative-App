import React from 'react';

const EmailDetail = ({ email }) => {
    return (
        <div className="email-detail">
            <h2>{email.subject}</h2>
            <p>{email.body}</p>
            <p><strong>From:</strong> {email.from}</p>
            <p><strong>To:</strong> {email.to.join(', ')}</p>
            <p><strong>Date:</strong> {new Date(email.date).toLocaleString()}</p>
        </div>
    );
};

export default EmailDetail;