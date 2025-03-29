import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido." });
  }

  const { nome, email, telefone, mensagem }: FormData = req.body;

  // Validações no backend
  if (!nome.trim()) {
    return res.status(400).json({ message: "O campo 'Nome' é obrigatório." });
  }

  if (!email.trim() && !telefone.trim()) {
    return res.status(400).json({
      message: "Preencha pelo menos um dos campos: 'E-mail' ou 'Telefone'.",
    });
  }

  // Configuração do transporte de e-mail
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Ou outro serviço de e-mail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Nova mensagem do formulário de contato",
    text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ message: "Erro ao enviar o e-mail." });
  }
}
