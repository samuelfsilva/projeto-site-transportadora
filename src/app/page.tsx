"use client";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./styles.css";

const repositoryUrl = process.env.NEXT_PUBLIC_REPOSITORY_URL || "";

const Main = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Valdecir Transportes</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="inicio" />
      <div className="max-w-6xl mx-auto bg-white">
        <div className="main-container">
          {/* Hero Section with Car */}
          <section className="hero-section">
            <Image
              src={`${repositoryUrl}/images/veiculo-01.png`}
              alt="Executive Mercedes"
              className="hero-image"
              width={800}
              height={600}
            />
          </section>

          {/* Key Features */}
          <section className="key-features">
            {/* <div className="key-features-title"> */}
            <div className="section-title">
              <h1 className="section-title-text">
                Soluções Exclusivas em <br />
                Transporte Executivo
              </h1>
            </div>
            <div className="key-features-cards">
              {[
                {
                  icon: (
                    <img
                      src={`${repositoryUrl}/images/icon-clock.svg`}
                      className="key-feature-icon"
                    />
                  ),
                  title: "Pontualidade e Confiabilidade",
                  description:
                    "Garantimos que nossos clientes chegam ao destino no horário e com total profissionalismo.",
                },
                {
                  icon: (
                    <img
                      src={`${repositoryUrl}/images/icon-favorite.svg`}
                      className="key-feature-icon"
                    />
                  ),
                  title: "Conforto e Exclusividade",
                  description:
                    "Oferecemos veículos de alto padrão, proporcionando uma experiência exclusiva.",
                },
                {
                  icon: (
                    <img
                      src={`${repositoryUrl}/images/icon-support.svg`}
                      className="key-feature-icon"
                    />
                  ),
                  title: "Atendimento Personalizado",
                  description:
                    "Atendemos com atenção às necessidades específicas de cada cliente, pessoas e passageiros.",
                },
              ].map((feature, index) => (
                <div key={index} className="key-feature-card">
                  <div className="key-feature-icon">{feature.icon}</div>
                  <h3 className="key-feature-title">{feature.title}</h3>
                  <p className="key-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Request Quote Button */}
            <div className="request-quote">
              <button
                className="request-quote-button"
                onClick={() => {
                  router.push("/contato");
                }}
              >
                Solicitar Orçamento
              </button>
            </div>
          </section>

          {/* Services */}
          <section className="services-section">
            <div className="section-title">
              <h1 className="hero-title">Nossos Serviços</h1>
            </div>
            <div className="services-section-cards">
              {[
                {
                  image: `${repositoryUrl}/images/servico-01.png`,
                  title: "Motoristas Treinados",
                  description:
                    "Profissionais experientes, bilíngues (se aplicável) com foco no atendimento ao cliente.",
                },
                {
                  image: `${repositoryUrl}/images/servico-02.png`,
                  title: "Veículo Privativo",
                  description:
                    "Ideal para quem busca discrição, conforto exclusivo durante viagens ou compromissos.",
                },
                {
                  image: `${repositoryUrl}/images/servico-03.png`,
                  title: "Atendimento 24/7",
                  description:
                    "Flexibilidade para atender em qualquer momento, garantindo comodidade total.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${index % 2 !== 0 ? "reverse" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-content">
                    <div className="service-title-container">
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <Link href="/contato" className="service-link">
                      Saiba mais
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tourist Attraction */}
          <section className="tourist-section">
            <h2 className="tourist-title">Pontos Turísticos</h2>
            <div className="tourist-container">
              <div className="tourist-inner">
                <Image
                  src={`${repositoryUrl}/images/pontos-turisticos/arcos-lapa.jpeg`}
                  alt="Arcos da Lapa"
                  className="tourist-image"
                  width={500}
                  height={300}
                />
                <div className="tourist-overlay">
                  <p className="tourist-description">
                    <Link href="/pontos-turisticos">Arcos da Lapa</Link>
                  </p>
                  <p className="tourist-subdescription">
                    Vida noturna animada e cultural.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
