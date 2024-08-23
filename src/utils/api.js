import Nylas from 'nylas';

Nylas.config({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
});

export const fetchEmails = async () => {
    const messages = await Nylas.messages.list();
    return messages.map(message => ({
        id: message.id,
        subject: message.subject,
        snippet: message.snippet,
    }));
};

export const sendEmail = async ({ subject, body }) => {
    const draft = Nylas.drafts.build({
        subject: subject,
        body: body,
        to: [{ name: 'Recipient Name', email: 'recipient@example.com' }]
    });
    await draft.send();
};
