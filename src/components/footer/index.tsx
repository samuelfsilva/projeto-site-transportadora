import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styles.css";

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Valdecir Transportes"
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="footer-center">
            <div>
              <div className="footer-text">
                <p>
                  Copyright © Valdecir Paiva - Todos os direitos reservados. |{" "}
                </p>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Termos de Uso |{" "}
                </a>
                <a href="#" className="footer-link">
                  Política de Privacidade |{" "}
                </a>
                <a href="#" className="footer-link">
                  Política de Cookies
                </a>
              </div>
            </div>
            <div className="footer-developer">
              <p>Desenvolvido por </p>&nbsp;
              <a
                href="mailto:samuel.ferreira.ti@gmail.com"
                className="footer-link"
              >
                Samuel Ferreira
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <p className="footer-contact-title-text">Contato:</p>
            <p>
              Telefone: &nbsp;
              <a
                href="https://wa.me/5521965808417"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                (21) 96580-8417
              </a>
            </p>
            <div className="footer-email">
              <p>E-mail: </p>&nbsp;
              <a
                href="mailto:valdecir.paiva310@gmail.com"
                className="footer-link"
              >
                valdecir.paiva310@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
