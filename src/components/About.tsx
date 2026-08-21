import { MapPin } from "lucide-react";

const timeline = [
  {
    year: "2025 – hoy",
    text: "Máster en Diseño y Programación de Videojuegos",
  },
  { year: "2021 – 2025", text: "Grado en Diseño y Desarrollo de Videojuegos" },
  {
    year: "2019 – 2021",
    text: "FP Superior DAW - Desarrollo de Aplicaciones Web",
  },
  {
    year: "2017 – 2019",
    text: "FP Media SMR - Sistemas Microinformáticos y Redes",
  },
];

function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container about">
        <div className="about-avatar">RB</div>
        <div>
          <p className="kicker">· Sobre mí</p>
          <h2>De SMR a los videojuegos</h2>
          <p>
            Empecé en sistemas (SMR), me especialicé en desarrollo web (DAW) y
            aterricé en el mundo del videojuego con un grado en diseño y
            desarrollo de videojuegos. Ahora curso un máster en diseño y
            programación de videojuegos mientras sigo construyendo proyectos.
          </p>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item">
                <span className="timeline-dot" />
                <div>
                  <strong>{item.year}</strong> {item.text}
                </div>
              </div>
            ))}
          </div>
          <p className="section-sub">
            <MapPin size={15} /> España · abierto a remoto
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
