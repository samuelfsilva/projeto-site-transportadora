"use client";
import Footer from "@/components/footer";
import FormContato2 from "@/components/form-contato-2";
import Menu from "@/components/menu";
import Head from "next/head";
import Image from "next/image";
import "./styles.css";

const Contato = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Contato</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="contato" />
      <div className="container">
        <div className="content">
          {/* Hero Section */}
          <section className="hero">
            <Image
              src="/images/contato/contato.jpg"
              alt="Executive Mercedes"
              className="hero-image"
              width={6000}
              height={3000}
            />
          </section>

          <FormContato2 />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contato;
