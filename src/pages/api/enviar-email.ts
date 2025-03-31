import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido." });
  }

  const { name, email, phone, details }: FormData = req.body;

  // Validações no backend
  if (!name.trim()) {
    return res.status(400).json({ message: "O campo 'Nome' é obrigatório." });
  }

  if (!email.trim() && !phone.trim()) {
    return res.status(400).json({
      message: "Preencha pelo menos um dos campos: 'E-mail' ou 'Telefone'.",
    });
  }

  // Configuração do transporte de e-mail usando variáveis de ambiente
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "465", 10),
    secure: process.env.EMAIL_SECURE === "true", // true para 465, false para outras portas
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Nova mensagem do formulário de contato",
    text: `
      Nome: ${name.trim()}
      E-mail: ${email.trim() ? email : "Não informado"}
      Telefone: ${phone.trim() ? phone : "Não informado"}
      Mensagem: ${details.trim() ? details : "Não informado"}
    `,
  };

  try {
    await transporter.verify(); // Verifica se o transporte está configurado corretamente
    console.log("Conexão SMTP estabelecida com sucesso");
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ message: "Erro ao enviar o e-mail." });
  }
}
