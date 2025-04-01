import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styles.css";

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
const phoneNumberLink = process.env.NEXT_PUBLIC_PHONE_NUMBER_LINK || "";
const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "";
const developerName = process.env.NEXT_PUBLIC_DEVELOPER_NAME || "";
const developerEmailAddress =
  process.env.NEXT_PUBLIC_DEVELOPER_EMAIL_ADDRESS || "";

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
                href={`mailto:${developerEmailAddress}`}
                className="footer-link"
              >
                {developerName}
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <p className="footer-contact-title-text">Contato:</p>
            <p>
              Telefone: &nbsp;
              <a
                href={`https://wa.me/${phoneNumberLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {phoneNumber}
              </a>
            </p>
            <div className="footer-email">
              <p>E-mail: </p>&nbsp;
              <a href={`mailto:${emailAddress}`} className="footer-link">
                {emailAddress}
              </a>
            </div>
          </div>
          <div className="footer-developer-mobile">
            <p>Desenvolvido por </p>&nbsp;
            <a href={`mailto:${developerEmailAddress}`} className="footer-link">
              {developerName}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
