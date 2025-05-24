// Import the static forms plugin
import staticForms from "@cloudflare/pages-plugin-static-forms";

// Export the request handler
export const onRequest = staticForms({
  // This function will be called when a form is submitted
  respondWith: async ({ formData, name, env }) => {
    console.log("Form submission received:", name);
    
    // Only process the contact form
    if (name === "contact") {
      try {
        // Extract form data
        const userName = formData.get("name") || "Not provided";
        const userEmail = formData.get("email") || "Not provided";
        const userMessage = formData.get("message") || "Not provided";
        
        console.log("Form data:", { userName, userEmail });
        
        // Get environment variables with fallbacks
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

        console.log("Attempting to send email to:", recipientEmail);
        
        try {
          // Send email using Cloudflare Email (via MailChannels)
          const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailContent),
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to send email: ${response.status} ${response.statusText}`, errorText);
          } else {
            console.log("Email sent successfully!");
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError.message);
        }
      } catch (error) {
        console.error("Error processing form:", error.message);
      }
    }
    
    // Always redirect to thanks page
    return Response.redirect("/thanks", 302);
  },
});
