import "@/app/globals.css";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import "./styles.css";

const Servicos = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Pontos Turísticos</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="pontos-turisticos" />
      <div className="main-container">
        <section className="first-section">
          <div className="section-title">
            <h1 className="section-title-text">
              Conforto, Estilo e Segurança até os Melhores <br />
              Pontos Turísticos do Rio de Janeiro
            </h1>
          </div>
          <div className="section-description">
            <p>
              Explore as belezas do Rio com tranquilidade. Nossos veículos
              premium e motoristas experientes garantem uma viagem impecável até
              o Cristo Redentor, Pão de Açúcar, praias e muito mais. Deixe o
              caminho conosco e aproveite cada destino com estilo e segurança
              absoluta.
            </p>
          </div>
          <div className="section-title">
            <h1 className="section-title-text">Cartões postais clássicos:</h1>
          </div>
        </section>
        <section className="tourist-section">
          <div className="tourist-container">
            <Carousel
              items={[
                {
                  src: "/pontos-turisticos/arcos-lapa.jpeg",
                  link: "#",
                  title: "Lapa e Arcos da Lapa",
                  description: "Vida noturna animada e cultural.",
                },
                {
                  src: "/pontos-turisticos/cristo-redentor.jpg",
                  link: "#",
                  title: "Cristo Redentor",
                  description:
                    "Uma das 7 maravilhas do mundo moderno, oferece vistas incríveis da cidade.Vida noturna animada e cultural.",
                },
                {
                  src: "/pontos-turisticos/pao-de-acucar.jpg",
                  link: "#",
                  title: "Pão de Açúcar",
                  description:
                    "Passeio de bondinho com panoramas espetaculares.",
                },
                {
                  src: "/pontos-turisticos/praia-de-copacabana.jpg",
                  link: "#",
                  title: "Praia de Copacabana e Ipanema",
                  description:
                    "Famosas mundialmente, ideais para curtir o clima carioca.",
                },
                {
                  src: "/pontos-turisticos/parque-lage.png",
                  link: "#",
                  title: "Parque Lage",
                  description:
                    "Perfeito para fotos, com jardins e vista para o Cristo.",
                },
                {
                  src: "/pontos-turisticos/jardim-botanico.jpg",
                  link: "#",
                  title: "Jardim Botânico",
                  description: "Um passeio tranquilo em meio à natureza.",
                },
                {
                  src: "/pontos-turisticos/pedra-da-gavea.png",
                  link: "#",
                  title: "Trilha da Pedra da Gávea",
                  description: "Para aventureiros, com uma vista deslumbrante.",
                },
                {
                  src: "/pontos-turisticos/escadaria-selaron.png",
                  link: "#",
                  title: "Escadaria Selarón",
                  description:
                    "Um mosaico de cores e culturas no coração de Santa Teresa. Um ícone de arte urbana, colorida e vibrante.",
                },
                {
                  src: "/pontos-turisticos/museu-do-amanha.png",
                  link: "#",
                  title: "Museu do Amanhã",
                  description:
                    "Um museu de ciências com arquitetura futurista e exposições interativas.",
                },
                {
                  src: "/pontos-turisticos/theatro-municipal.jpg",
                  link: "#",
                  title: "Theatro Municipal",
                  description:
                    "Um dos mais belos teatros do Brasil, com apresentações de ópera e balé. Um ícone cultural com apresentações e visitas guiadas.",
                },
                {
                  src: "/pontos-turisticos/santa-teresa.png",
                  link: "#",
                  title: "Santa Teresa",
                  description:
                    "Bairro encantador, repleto de ateliês e restaurantes. Um refúgio boêmio com ruas de paralelepípedos que respiram arte e cultura.",
                },
                {
                  src: "/pontos-turisticos/ilha-grande.jpg",
                  link: "#",
                  title: "Ilha Grande",
                  description:
                    "Destino tropical a poucas horas do Rio, com praias paradisíacas e trilhas deslumbrantes. Um verdadeiro paraíso para quem busca tranquilidade e contato com a natureza.",
                },
              ]}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Servicos;
