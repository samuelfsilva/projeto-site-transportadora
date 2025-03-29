import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import Head from "next/head";
// import "../../app/globals.css";
import Menu from "@/components/menu";
import "./styles.css";

const Main = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Sobre nós</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="sobre-nos" />
      <div className="max-w-6xl mx-auto bg-white">
        {/* Hero Section with Car */}
        <section className="relative">
          <img
            src="/veiculo-01.png"
            alt="Executive Mercedes"
            className="w-full h-[500px] object-cover"
          />
          {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-3xl font-bold">
              Soluções Exclusivas em Transporte Executivo
            </h1>
          </div>
        </section>

        {/* Key Features */}
        <section className="grid grid-cols-3 gap-4 p-10 bg-gray-100">
          {[
            {
              icon: <AccessTimeIcon className="w-12 h-12 text-gray-700" />,
              title: "Pontualidade & Confiabilidade",
              description:
                "Garantimos que nossos clientes chegam ao destino no horário e com total profissionalismo.",
            },
            {
              icon: <FavoriteIcon className="w-12 h-12 text-gray-700" />,
              title: "Conforto & Exclusividade",
              description:
                "Oferecemos veículos de alto padrão, proporcionando uma experiência exclusiva.",
            },
            {
              icon: <PersonIcon className="w-12 h-12 text-gray-700" />,
              title: "Atendimento Personalizado",
              description:
                "Atendemos com atenção às necessidades específicas de cada cliente, pessoas e passageiros.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Request Quote Button */}
        <div className="text-center py-8">
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition">
            Solicitar Orçamento
          </button>
        </div>

        {/* Services */}
        <section className="grid md:grid-cols-3 gap-6 p-10">
          {[
            {
              image: "/api/placeholder/400/300",
              icon: <GroupIcon className="w-10 h-10" />,
              title: "Motoristas Treinados",
              description:
                "Profissionais experientes, bilíngues (se aplicável) com foco no atendimento ao cliente.",
            },
            {
              image: "/api/placeholder/400/300",
              icon: <CarIcon className="w-10 h-10" />,
              title: "Veículo Privativo",
              description:
                "Ideal para quem busca discrição, conforto exclusivo durante viagens ou compromissos.",
            },
            {
              image: "/api/placeholder/400/300",
              icon: <AccessTimeIcon className="w-10 h-10" />,
              title: "Atendimento 24/7",
              description:
                "Flexibilidade para atender em qualquer momento, garantindo comodidade total.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-4 font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <a
                  href="#"
                  className="text-yellow-600 hover:underline mt-4 inline-block"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Tourist Attraction */}
        <section className="p-10 bg-gray-100">
          <h2 className="text-2xl font-bold text-center mb-6">
            Pontos Turísticos
          </h2>
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <img
                src="veiculo-01.png"
                alt="Arcos da Lapa"
                className="w-full rounded-lg shadow-md"
              />
              <p className="text-center mt-4 text-gray-600">
                Arcos da Lapa - Vida noturna animada e cultural.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6">
          <div className="flex justify-between">
            <div>
              <p>© Valdecir Paiva - Todos os direitos reservados</p>
              <div className="mt-2">
                <a href="#" className="mr-4 hover:text-gray-300">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-gray-300">
                  Política de Privacidade
                </a>
              </div>
            </div>
            <div>
              <p>Contato: (21) 99999-9999</p>
              <p>E-mail: contato@empresa.com.br</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
