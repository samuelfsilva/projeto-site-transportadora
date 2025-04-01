"use client";
import Footer from "@/components/footer";
import FormContato2 from "@/components/form-contato-2";
import Menu from "@/components/menu";
import Head from "next/head";
import Image from "next/image";
import "./styles.css";

const repositoryUrl = process.env.NEXT_PUBLIC_REPOSITORY_URL || "";

const Contato = () => {
  return (
    <>
      <Head>
        <title>Valdecir Transportes - Contato</title>
        <meta name="description" content="We Move Lives" />
      </Head>
      <Menu selected_item="contato" />
      <div className="contato-container">
        <div className="contato-content">
          {/* Hero Section */}
          <section className="contato-hero">
            <Image
              src={`${repositoryUrl}/images/contato/contato.jpg`}
              alt="Executive Mercedes"
              className="contato-hero-image"
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
