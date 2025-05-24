# Contact Form Email Setup with Cloudflare

This project uses Cloudflare Pages with a contact form that sends submissions directly to your email using Cloudflare's email capabilities. Here's how to set it up:

## How It Works

1. The contact form in `src/components/ContactForm.jsx` submits data to Cloudflare Pages
2. The `_worker.js` file processes the form submission and sends an email using Cloudflare's MailChannels integration
3. After sending the email, the user is redirected to a "thanks" page

## Installation

Before deploying, install the dependencies:

```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn
```

## Cloudflare Email Setup

Cloudflare Pages can send emails through MailChannels without any API keys. Here's how to set it up:

1. **Verify your domain ownership**:
   - Make sure your domain is properly set up in Cloudflare (with proper DNS records)
   - This is required for MailChannels to accept emails from your domain

2. **Set up SPF and DKIM records** (optional but recommended):
   - Add an SPF record: `TXT @ v=spf1 include:_spf.mx.cloudflare.net ~all`
   - For DKIM, follow Cloudflare's documentation to set up DKIM for your domain

## Configuration

Set up environment variables in your Cloudflare Pages project:

1. Go to your Cloudflare Pages dashboard
2. Select your project
3. Go to Settings > Environment variables
4. Add the following variables:

### Required Variables

- `RECIPIENT_EMAIL`: Your email address where you want to receive form submissions
- `SENDER_EMAIL`: The "from" email address (must be from a domain you control, e.g., noreply@yourdomain.com)
- `SENDER_NAME`: The display name for the sender (e.g., "Your Website Contact Form")

## Testing

After setting up:

1. Deploy your site to Cloudflare Pages
2. Fill out and submit the contact form
3. Check your email to verify you received the submission

## Troubleshooting

If you're not receiving emails:

1. Check your spam/junk folder
2. Verify your environment variables are set correctly
3. Check the Cloudflare Pages logs for any errors
4. Make sure your domain is properly verified in Cloudflare
5. Ensure your SPF and DKIM records are correctly set up

## Local Development

For local development, you can use environment variables in a `.dev.vars` file:

```
RECIPIENT_EMAIL=your.email@example.com
SENDER_EMAIL=noreply@yourdomain.com
SENDER_NAME=Your Website Contact Form
```

Run your project with `npx wrangler pages dev` to use these variables locally.

## Additional Resources

- [Cloudflare Workers Email Documentation](https://developers.cloudflare.com/email-routing/email-workers/)
- [MailChannels Documentation](https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels/)
