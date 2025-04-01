import { sendGoogleEmail } from "@/lib/google";
import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "";

// Esquema de validação com Joi
const formSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "O campo 'Nome' é obrigatório.",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "O campo 'E-mail' é obrigatório.",
    "string.email": "O campo 'E-mail' deve ser um endereço de e-mail válido.",
  }),
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .allow("")
    .messages({
      "string.pattern.base":
        "O campo 'Telefone' deve ser um número de telefone válido.",
    }),
  details: Joi.string().trim().required().messages({
    "string.empty": "O campo 'Mensagem' é obrigatório.",
  }),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido." });
  }

  // Validação dos dados usando Joi e obtenção dos valores tratados
  const { value, error } = formSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: error.details.map((err) => err.message).join(", ") });
  }

  const { name, email, phone, details }: FormData = value;

  const subject = "Nova mensagem do formulário de contato";

  const text = `
      Nome: ${name}
      E-mail: ${email ? email : "Não informado"}
      Telefone: ${phone ? phone : "Não informado"}
      Mensagem: ${details ? details : "Não informado"}
    `;

  switch (EMAIL_SERVICE) {
    case "gmail":
      sendGoogleEmail(EMAIL_RECIPIENT, subject, text)
        .then(() => {
          res.status(200).json({ message: "E-mail enviado com sucesso!" });
        })
        .catch((error) => {
          console.error("Erro ao enviar e-mail:", error);
          res.status(500).json({ message: "Erro ao enviar o e-mail." });
        });
      break;

    case "":
      // Se EMAIL_SERVICE estiver vazio, não faz nada
      res.status(400).json({ message: "Serviço de e-mail não configurado." });
      break;

    default:
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
        subject,
        text,
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
      break;
  }
}
