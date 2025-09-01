import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendMail = async ({ to, subject, html, text }) => {
  const from = process.env.SMTP_FROM || 'ORII <no-reply@orii.in>';
  return transporter.sendMail({ from, to, subject, html, text });
};
