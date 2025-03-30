"use client";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import Image from "next/image";
import "./styles.css";

const Sobre = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Sobre Nós</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="sobre-nos" />
      <div className="main-container">
        <div className="main-container">
          <section className="hero-section">
            <Image
              src="/sobre-nos/institucional.jpg"
              alt="Equipe"
              className="hero-image"
              width={1200}
              height={800}
            />
          </section>

          {/* Key Features */}
          <section className="key-features">
            <div className="section-title">
              <h1 className="section-title-text">Além do transporte</h1>
            </div>
            <div className="section-description">
              <p>
                Nosso objetivo é oferecer um transporte executivo que vai além
                da simples locomoção: Proporcionamos uma experiência premium,
                com conforto, segurança e personalização. Cada detalhe é
                cuidadosamente planejado para atender às necessidades exclusivas
                dos nossos clientes, transformando cada trajeto em um momento de
                excelência. Nossa equipe está comprometida em criar soluções sob
                medida, garantindo que sua viagem seja muito mais do que um
                deslocamento – é uma extensão do seu estilo de vida ou dos
                valores da sua empresa. Combinamos a expertise de profissionais
                altamente qualificados, veículos de última geração e um
                atendimento impecável para redefinir seus padrões de mobilidade.
              </p>
            </div>
          </section>

          {/* Services */}
          <section className="services-section">
            <div className="section-title">
              <h1 className="section-title-text">
                Valores que nos definem:
                <br /> Excelência, Personalização e <br />
                Confiança
              </h1>
            </div>
            <div className="values-list">
              {[
                {
                  title: "Excelência",
                  description:
                    "Buscamos a perfeição em cada detalhe, garantindo um serviço de alta qualidade.",
                },
                {
                  title: "Personalização",
                  description:
                    "Adaptamos nossos serviços às necessidades exclusivas de cada cliente.",
                },
                {
                  title: "Confiança",
                  description:
                    "Construímos relações sólidas baseadas na transparência e no compromisso.",
                },
              ].map((value, index) => (
                <div className="value-item" key={index}>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
