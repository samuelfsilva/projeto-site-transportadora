import nodemailer from "nodemailer";

async function sendYahooEmail(
  to: string,
  subject: string,
  text: string,
  html?: string
): Promise<void> {
  // Create a transporter object using Yahoo's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "your-email@yahoo.com", // Replace with your Yahoo email
      pass: "your-email-password", // Replace with your Yahoo email password or app password
    },
  });

  // Email options
  const mailOptions = {
    from: "your-email@yahoo.com", // Replace with your Yahoo email
    to,
    subject,
    text,
    html,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendYahooEmail;
