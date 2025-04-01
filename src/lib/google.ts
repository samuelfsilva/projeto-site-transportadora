import { google } from "googleapis";
import nodemailer from "nodemailer";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || "";
const EMAIL_USER = process.env.EMAIL_USER || "";
const EMAIL_SENDER = process.env.EMAIL_SENDER || "";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendGoogleEmail(
  to: string,
  subject: string,
  text: string
) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    const mailOptions = {
      from: EMAIL_SENDER,
      to,
      subject,
      text,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
}
