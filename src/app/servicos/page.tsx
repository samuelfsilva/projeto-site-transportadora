import Footer from "@/components/footer";
import FormContato from "@/components/form-contato";
import Menu from "@/components/menu";
import Head from "next/head";
import Image from "next/image";
import "./styles.css";

const repositoryUrl = process.env.NEXT_PUBLIC_REPOSITORY_URL || "";

const Servicos = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Serviços</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="servicos" />
      <div className="main-container">
        {/* Service Section */}
        <section className="service-section">
          {[
            {
              src: `${repositoryUrl}/images/servicos/condutor-09.png`,
              alt: "Translados",
              title: "Translados",
              description:
                "Translados disponíveis para aeroportos (Santos Dumont e Galeão), hotéis e eventos corporativos. Serviço eficiente e pontual.",
            },
            {
              src: `${repositoryUrl}/images/servicos/veiculo-06.png`,
              alt: "Passeios Turísticos Privativos",
              title: "Passeios Turísticos Privativos",
              description:
                "Roteiros flexíveis nos principais pontos turísticos do Rio de Janeiro.",
            },
            {
              src: `${repositoryUrl}/images/servicos/passageiro-01.png`,
              alt: "Serviços Corporativos",
              title: "Serviços Corporativos",
              description:
                "Transporte para reuniões, conferências ou eventos empresariais.",
            },
            {
              src: `${repositoryUrl}/images/servicos/veiculo-07.png`,
              alt: "Viagens de Curta ou Longa Distância",
              title: "Viagens de Curta ou Longa Distância",
              description:
                "Deslocamentos para cidades próximas como Búzios, Petrópolis ou Angra dos Reis.",
            },
          ].map((feature, index) => (
            <div key={index} className="service-item">
              <div className="service-section-image">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={400}
                  height={300}
                />
              </div>
              <div className="service-content">
                <h3 className="service-title">{feature.title}</h3>
                <p className="service-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
        <FormContato />
        <Footer />
      </div>
    </>
  );
};

export default Servicos;
