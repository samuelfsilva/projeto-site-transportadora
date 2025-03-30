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
              src="/images/sobre-nos/institucional.jpg"
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
                  image: "/sobre-nos/valores-01.png",
                  alt: "Excelência",
                  title: "Excelência em todos os detalhes : ",
                  description:
                    "Acreditamos que a qualidade está nos mínimos detalhes. Desde a escolha da frota até o atendimento ao cliente, buscamos superar expectativas e oferecer um serviço que represente o mais alto padrão de transporte executivo.",
                },
                {
                  image: "/sobre-nos/valores-02.png",
                  alt: "Personalização",
                  title: "Personalização como prioridade : ",
                  description:
                    "Entendemos que cada cliente é único. Por isso, nossas soluções são moldadas de acordo com suas necessidades específicas, garantindo uma experiência exclusiva e alinhada aos seus objetivos pessoais ou corporativos.",
                },
                {
                  image: "/sobre-nos/valores-03.png",
                  alt: "Segurança",
                  title: "Segurança e confiabilidade acima de tudo : ",
                  description:
                    "Sua tranquilidade é nossa prioridade. Contamos com veículos modernos, rigorosos protocolos de segurança e motoristas altamente treinados para proporcionar uma viagem segura e confiável em qualquer circunstância.",
                },
                {
                  image: "/sobre-nos/valores-04.png",
                  alt: "Conforto",
                  title: "Compromisso com o conforto e o bem-estar : ",
                  description:
                    "Para nós, o transporte vai além do deslocamento físico. Valorizamos o conforto e o bem-estar dos nossos clientes, criando uma atmosfera premium que transforma cada trajeto em um momento de relaxamento e produtividade.",
                },
                {
                  image: "/sobre-nos/valores-05.png",
                  alt: "Inovação",
                  title: "Inovação no atendimento e na tecnologia : ",
                  description:
                    "Estamos constantemente investindo em tecnologia e métodos inovadores para elevar sua experiência. Nossa equipe está sempre atualizada com as melhores práticas do mercado, garantindo um serviço moderno e eficiente.",
                },
                {
                  image: "/sobre-nos/valores-06.png",
                  alt: "Confiança",
                  title:
                    "Relacionamentos baseados em confiança e transparência : ",
                  description:
                    "Construímos parcerias duradouras por meio de um atendimento honesto e transparente. Seja para viagens pessoais ou corporativas, queremos ser o suporte que você pode confiar a qualquer momento.",
                },
              ].map((value, index) => (
                <div className="value-item" key={index}>
                  <Image
                    src={value.image}
                    alt={value.alt}
                    className="value-image"
                    width={500}
                    height={300}
                  />
                  <p className="value-description">
                    <strong>{value.title}</strong>
                    {value.description}
                  </p>
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
