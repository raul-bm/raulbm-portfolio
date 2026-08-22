import { Download } from "lucide-react";

function Hero() {
  const codeLines = [
    <>
      const <span className="pfkw">raul</span> = {"{"}
    </>,
    <>
      <span className="pfprop">rol</span>: "
      <span className="pfstr">Desarrollador Web y de Videojuegos</span>",
    </>,
    <>
      <span className="pfprop">stack</span>: {"["}
      <span className="pfstr">"Unity"</span>,{" "}
      <span className="pfstr">"C#"</span>,{" "}
      <span className="pfstr">"React"</span>,{" "}
      <span className="pfstr">"Node.js"</span>
      {"]"},
    </>,
    <>
      <span className="pfprop">buscando</span>: "
      <span className="pfstr">Trabajo como Desarrollador Junior</span>"
    </>,
    <>{"}"};</>,
  ];

  return (
    <section id="inicio" className="hero">
      <div className="hero-inner">
        <div>
          <a href="#contacto" className="hero-pill link-contact">
            <span className="hero-dot" />
            Abierto a oportunidades
          </a>
          <h1>
            Hola, soy <span className="hero-gradient">Raúl Benítez</span>
          </h1>
          <p className="hero-sub">
            Desarrollador <strong>web</strong> y de <strong>videojuegos</strong>
            . Construyo juegos y aplicaciones completas.
          </p>
          <div className="hero-actions">
            <a
              href="./files/curriculum-raulbm.pdf"
              download={true}
              target="_blank"
              className="btn btn-primary"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>
          {/**<div className="hero-social">
            <a href="https://github.com/tu-usuario" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hola@raul.dev" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>**/}
        </div>

        <div className="hero-code">
          <div className="hero-code-bar">
            <span />
            <span />
            <span />
            <em>quien-soy.js</em>
          </div>

          <pre>
            {codeLines.map((line, i) => (
              <span key={i} className="code-line">
                {line}
                {"\n"}
              </span>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
