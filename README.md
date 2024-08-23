# Nylas Creative App

## Overview
This application integrates with the Nylas API for email management and uses OpenAI's API for summarizing email content.

## Features
- View a list of emails
- Compose and send emails
- Summarize email content using AI

## Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Update `YOUR_CLIENT_ID`, `YOUR_CLIENT_SECRET`, and `YOUR_OPENAI_API_KEY` in the respective files
4. Run `npm start` to start the development server

### Usage Examples

```markdown
## Usage

### 1. Viewing Emails
- Upon launching the app, you will be directed to the **Dashboard** where you can see a list of your emails.
- Each email will display the subject and a snippet of the content, allowing you to quickly scan through your inbox.

### 2. Composing an Email
- To compose a new email, click on the **Compose Email** link in the sidebar.
- Fill in the **Subject** and **Body** fields.
- You can click the **Send Email** button to send your email directly.
- If you want to summarize the content of your email, click the **Summarize Email** button to generate a brief summary using AI.

### 3. Email Summarization
- When composing an email, you can utilize the AI summarization feature to get a concise summary of your email content.
- This feature is particularly useful for quickly reviewing lengthy emails or for drafting replies.

### 4. Responsive Design
- The app is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.
- You can access your emails and compose new ones from any device.

### 5. Integration with Nylas API
- The app integrates with the Nylas API to fetch and send emails securely.
- Make sure to configure your Nylas API credentials in the `src/utils/api.js` file to enable email functionalities.

### 6. Customizable UI
- You can customize the styles in the `src/styles` directory to match your preferences or branding.
- Modify the CSS files to change colors, fonts, and layouts as needed.

### 7. Running the App Locally
- After cloning the repository, navigate to the project directory and run:
  ```bash
  npm install
  npm start
  ```
- This will start the development server, and you can view the app in your web browser at `http://localhost:3000`.

### Nylas API Usage

```markdown
## API Usage

### 1. Sending an Email
To send an email using the Nylas API, you can use the following POST request format. Make sure to replace the placeholders with actual values.

#### Endpoint
```
POST https://api.nylas.com/send
```

#### Request Body
```json
{
    "subject": "Your Email Subject",
    "body": "This is the body of the email.",
    "to": [
        {
            "name": "Recipient Name",
            "email": "recipient@example.com"
        }
    ],
    "from": [
        {
            "name": "Your Name",
            "email": "your_email@example.com"
        }
    ]
}
```

#### Example Command
Using `curl`, you can send an email as follows:
```bash
curl -X POST https://api.nylas.com/send \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "subject": "Hello from Nylas!",
    "body": "This is a test email sent from the Nylas Creative App.",
    "to": [
        {
            "name": "John Doe",
            "email": "johndoe@example.com"
        }
    ],
    "from": [
        {
            "name": "Your Name",
            "email": "your_email@example.com"
        }
    ]
}'
```

### 2. Creating a Draft
You can create a draft of an email that can be sent later.

#### Endpoint
```
POST https://api.nylas.com/drafts
```

#### Request Body
```json
{
    "subject": "Draft Email Subject",
    "body": "This is the body of the draft email.",
    "to": [
        {
            "name": "Recipient Name",
            "email": "recipient@example.com"
        }
    ]
}
```

#### Example Command
```bash
curl -X POST https://api.nylas.com/drafts \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "subject": "Draft Email",
    "body": "This is a draft email.",
    "to": [
        {
            "name": "Jane Doe",
            "email": "janedoe@example.com"
        }
    ]
}'
```

### 3. Fetching Emails
To fetch a list of emails from your inbox, you can use the following GET request.

#### Endpoint
```
GET https://api.nylas.com/messages
```

#### Example Command
```bash
curl -X GET https://api.nylas.com/messages \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 4. Fetching a Specific Email
To fetch the details of a specific email, you can use the email ID.

#### Endpoint
```
GET https://api.nylas.com/messages/{message_id}
```

#### Example Command
```bash
curl -X GET https://api.nylas.com/messages/YOUR_MESSAGE_ID \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Note
- Replace `YOUR_ACCESS_TOKEN` with your actual access token obtained from the Nylas API.
- Ensure that you have the necessary permissions and scopes enabled in your Nylas application to perform these actions.

### 8. Contributing
- Contributions are welcome! If you have suggestions for new features or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
