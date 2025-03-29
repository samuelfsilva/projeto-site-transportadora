import "@/app/globals.css";
import React from "react";
import "./styles.css";

const FormContato: React.FC = () => {
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
          <form
            className="contact-form"
            action="/api/enviar-email"
            method="POST"
          >
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
        </div>
      </section>
    </>
  );
};

export default FormContato;
