"use client";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";

const repositoryUrl = process.env.NEXT_PUBLIC_REPOSITORY_URL || "";

const FormContato2: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o redirecionamento padrão do formulário

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()); // Converte os dados do formulário para um objeto

    try {
      const response = await fetch(`${repositoryUrl}/api/enviar-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatusMessage("Mensagem enviada com sucesso!");
        event.currentTarget.reset(); // Limpa o formulário após o envio
      } else {
        const errorData = await response.json();
        setStatusMessage(`Erro: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setStatusMessage(
        "Erro ao enviar a mensagem. Tente novamente mais tarde."
      );
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="section-title">
          <h1 className="section-title-text">Entre em contato</h1>
        </div>
        <div className="contact-section-form">
          <p className="contact-section-description">
            Solicite um orçamento sem compromisso e conte com a experiência de
            nossos especialistas.
          </p>
          <p className="contact-section-description">
            Entre em contato pelo WhatsApp:
            <Link
              href="https://wa.me/5521965808417?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20transporte."
              target="_blank"
              className="whatsapp-link"
            >
              <Image
                src={`${repositoryUrl}/images/contato/whatsapp.png`}
                alt="WhatsApp"
                className="whatsapp-icon"
                width={400}
                height={402}
              />
            </Link>
          </p>
          <p className="contact-section-description">
            Ou preencha nosso formulário e entraremos em contato o mais breve
            possível.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Seu telefone"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="details">Envie mais detalhes</label>
              <textarea
                id="details"
                name="details"
                placeholder="Escreva aqui..."
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Enviar
            </button>
          </form>
          {statusMessage && (
            <p className="status-message">{statusMessage}</p> // Exibe a mensagem de status
          )}
        </div>
      </section>
    </>
  );
};

export default FormContato2;
