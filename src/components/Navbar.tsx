import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

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
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
