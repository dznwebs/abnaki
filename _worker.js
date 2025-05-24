import staticForms from "@cloudflare/pages-plugin-static-forms";

export const onRequest = staticForms({
    respondWith: async ({ formData, name, env }) => {
        // Only process the contact form
        if (name === "contact") {
            try {
                // Extract form data
                const userName = formData.get("name") || "Not provided";
                const userEmail = formData.get("email") || "Not provided";
                const userMessage = formData.get("message") || "Not provided";
                
                // Get environment variables
                const recipientEmail = env.RECIPIENT_EMAIL || "controldominiosijc@gmail.com";
                const senderEmail = env.SENDER_EMAIL || "noreply@yourdomain.com";
                const senderName = env.SENDER_NAME || "Your Website Contact Form";
                
                // Prepare email content for Cloudflare Email
                const emailContent = {
                    personalizations: [
                        {
                            to: [{ email: recipientEmail }],
                            subject: `New Contact Form Submission from ${userName}`,
                        },
                    ],
                    from: {
                        email: senderEmail,
                        name: senderName
                    },
                    content: [
                        {
                            type: "text/plain",
                            value: `Name: ${userName}\nEmail: ${userEmail}\nMessage: ${userMessage}`,
                        },
                        {
                            type: "text/html",
                            value: `
                                <h2>New Contact Form Submission</h2>
                                <p><strong>Name:</strong> ${userName}</p>
                                <p><strong>Email:</strong> ${userEmail}</p>
                                <p><strong>Message:</strong> ${userMessage}</p>
                            `,
                        },
                    ],
                };

                // Send email using Cloudflare Email (via MailChannels)
                const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(emailContent),
                });

                if (!response.ok) {
                    // Log error but still redirect user (don't show error to user)
                    console.error("Failed to send email:", await response.text());
                }
            } catch (error) {
                // Log error but still redirect user (don't show error to user)
                console.error("Error processing form:", error);
            }
        }
        
        // Always redirect to thanks page
        return Response.redirect("/thanks", 302);
    },
});

// The API key should be set as an environment variable in Cloudflare Pages
// Do not hardcode it here
