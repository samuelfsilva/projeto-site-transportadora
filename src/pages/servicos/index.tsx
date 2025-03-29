import "@/app/globals.css";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import Image from "next/image";
import "./styles.css";
const Servicos = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Serviços</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="servicos" />
      <div className="main-container">
        {/* Key Features */}
        <section className="key-features">
          {[
            {
              image: (
                <Image
                  src="/servicos/condutor-09.png"
                  alt="Translados"
                  className="key-feature-image"
                  width={400}
                  height={300}
                />
              ),
              title: "Translados",
              description:
                "Translados disponíveis para aeroportos (Santos Dumont e Galeão), hotéis e eventos corporativos. Serviço eficiente e pontual.",
            },
            {
              image: (
                <Image
                  src="/servicos/veiculo-06.png"
                  alt="Passeios Turísticos Privativos"
                  className="key-feature-image"
                  width={400}
                  height={300}
                />
              ),
              title: "Passeios Turísticos Privativos",
              description:
                "Roteiros flexíveis nos principais pontos turísticos do Rio de Janeiro.",
            },
            {
              image: (
                <Image
                  src="/servicos/passageiro-01.png"
                  alt="Serviços Corporativos"
                  className="key-feature-image"
                  width={400}
                  height={300}
                />
              ),
              title: "Serviços Corporativos",
              description:
                "Transporte para reuniões, conferências ou eventos empresariais.",
            },
            {
              image: (
                <Image
                  src="/servicos/veiculo-07.png"
                  alt="Viagens de Curta ou Longa Distância"
                  className="key-feature-image"
                  width={400}
                  height={300}
                />
              ),
              title: "Viagens de Curta ou Longa Distância",
              description:
                "Deslocamentos para cidades próximas como Búzios, Petrópolis ou Angra dos Reis.",
            },
          ].map((feature, index) => (
            <div key={index} className="key-feature-card">
              <div className="key-feature-image">{feature.image}</div>
              <div className="key-feature-content">
                <h3 className="key-feature-title">{feature.title}</h3>
                <p className="key-feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="contact-section">
          <div className="contact-section-title">
            <h1 className="contact-section-title-text">Entre em contato</h1>
          </div>
          <div className="contact-section-form">
            <p className="contact-section-description">
              Solicite um orçamento sem compromisso e conte com a experiência de
              nossos especialistas.
            </p>
            <form
              className="contact-form"
              action="/api/send-email"
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
        <Footer />
      </div>
    </>
  );
};

export default Servicos;
