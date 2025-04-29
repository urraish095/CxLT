import { createHash } from "crypto";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Mailchimp configuration
    const API_KEY = process.env.MAILCHIMP_API_KEY; 
    const DC = process.env.MAILCHIMP_DC;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID; // Replace with your actual list ID

    // Generate MD5 hash of lowercase email for Mailchimp
    const emailHash = createHash("md5").update(email.toLowerCase()).digest("hex");

    // Construct the API URL for adding/updating list members
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed", // Use 'pending' if you want double opt-in
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.status >= 400) {
      // Handle specific Mailchimp error cases
      if (responseData.title === "Member Exists") {
        return res.status(200).json({ message: "You're already subscribed!" });
      }
      
      return res.status(response.status).json({ 
        error: responseData.detail || "Error subscribing to the newsletter" 
      });
    }

    return res.status(200).json({ message: "Successfully subscribed to the newsletter!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}