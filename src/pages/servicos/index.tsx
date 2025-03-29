import "@/app/globals.css";
import Footer from "@/components/footer";
import FormContato from "@/components/form-contato";
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
        <FormContato />
        <Footer />
      </div>
    </>
  );
};

export default Servicos;
