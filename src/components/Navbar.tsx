import { useState } from "react";
import { Download, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { t, lang, setLang } = useLang();

  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          href="#inicio"
          className="navbar-brand"
          onClick={() => setOpen(false)}
        >
          <span className="navbar-logo">R</span>
          <span>Raúl Benítez Millet</span>
        </a>

        <button
          className="navbar-burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="./files/curriculum-raulbm.pdf"
            download={true}
            target="_blank"
            className="navbar-cv btn-primary"
          >
            <Download size={15} />
            CV
          </a>
          <div className="lang-dropdown">
            <button
              type="button"
              className="navbar-cv"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((o) => !o)}
            >
              <Globe size={15} color="white" /> {lang.toUpperCase()}{" "}
              <ChevronDown size={14} color="white" />
            </button>
            {langOpen && (
              <div className="lang-menu" role="menu">
                <button
                  type="button"
                  onClick={() => {
                    setLang("es");
                    setLangOpen(false);
                    setOpen(false);
                  }}
                >
                  Español
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLang("en");
                    setLangOpen(false);
                    setOpen(false);
                  }}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
