import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styles.css";

type SelectedItem =
  | "inicio"
  | "servicos"
  | "pontos-turisticos"
  | "sobre-nos"
  | "contato";

const Menu: React.FC<{ selected_item: SelectedItem }> = ({ selected_item }) => {
  return (
    <>
      {/* Header */}
      <header className="header-tag">
        <div className="logo-tag">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo Valdecir Transportes"
              width={100}
              height={50}
            />
          </Link>
        </div>
        <nav className="nav-tag">
          <Link
            href="/"
            className={`menu-item ${
              selected_item === "inicio" ? "selected" : ""
            }`}
          >
            INÍCIO
          </Link>
          <div className="menu-item dropdown">
            <Link
              href="/servicos"
              className={`menu-item ${
                selected_item === "servicos" ? "selected" : ""
              }`}
            >
              SERVIÇOS
            </Link>
            <div className="dropdown-content">
              <Link
                href="/servicos"
                className={`submenu-item ${
                  selected_item === "servicos" ? "selected" : ""
                }`}
              >
                NOSSOS SERVIÇOS
              </Link>
              <Link
                href="/pontos-turisticos"
                className={`submenu-item ${
                  selected_item === "pontos-turisticos" ? "selected" : ""
                }`}
              >
                PONTOS TURÍSTICOS
              </Link>
            </div>
          </div>
          <Link
            href="/sobre-nos"
            className={`menu-item ${
              selected_item === "sobre-nos" ? "selected" : ""
            }`}
          >
            SOBRE NÓS
          </Link>
          <Link
            href="/contato"
            className={`menu-item ${
              selected_item === "contato" ? "selected" : ""
            }`}
          >
            CONTATO
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Menu;
