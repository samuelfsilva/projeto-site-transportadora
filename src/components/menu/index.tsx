"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";

const repositoryUrl = process.env.NEXT_PUBLIC_REPOSITORY_URL || "";

type SelectedItem =
  | "inicio"
  | "servicos"
  | "pontos-turisticos"
  | "sobre-nos"
  | "contato";

const Menu: React.FC<{ selected_item: SelectedItem }> = ({ selected_item }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="header-tag">
        {/* Botão do menu hambúrguer para mobile */}
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className="logo-tag">
          <Link href="/">
            <Image
              src={`${repositoryUrl}/images/logo.svg`}
              alt="Logo Valdecir Transportes"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Menu Desktop */}
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
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link
            href="/"
            className={`menu-item ${
              selected_item === "inicio" ? "selected" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            INÍCIO
          </Link>
          <Link
            href="/servicos"
            className={`menu-item ${
              selected_item === "servicos" ? "selected" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            SERVIÇOS
          </Link>
          <Link
            href="/pontos-turisticos"
            className={`menu-item ${
              selected_item === "pontos-turisticos" ? "selected" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            PONTOS TURÍSTICOS
          </Link>
          <Link
            href="/sobre-nos"
            className={`menu-item ${
              selected_item === "sobre-nos" ? "selected" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            SOBRE NÓS
          </Link>
          <Link
            href="/contato"
            className={`menu-item ${
              selected_item === "contato" ? "selected" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            CONTATO
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
