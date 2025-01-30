import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message) {
  const email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  return Buffer.from(email)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const { firstName, lastName, company, requestDetails, industry, phone, email, inquiryType } = bodyJSON;

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      "New Inquiry from Contact Form",
      `
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>
      <p><b>Industry:</b> ${industry}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Inquiry Type:</b> ${inquiryType}</p>
      <p><b>Request Details:</b> ${requestDetails || "N/A"}</p>
      `
    );

    const clientEmailBody = makeBody(
      email,
      process.env.EMAIL_USER,
      "Thank You for Your Inquiry",
      `
      <p>Dear ${firstName},</p>
      <p>Thank you for reaching out to us! We have received your inquiry and will get back to you shortly.</p>
      <p>If you have any urgent concerns, feel free to reply to this email.</p>
      <p>Best regards,</p>
      <p>The Support Team</p>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    /*await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });*/

    return NextResponse.json({ message: "Inquiry sent successfully." });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Failed to send the inquiry.", error: error.message },
      { status: 500 }
    );
  }
}
