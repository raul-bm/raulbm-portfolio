import { MapPin } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

function About() {
  const { t } = useLang();

  const timeline = [
    {
      year: t.about.year1,
      text: t.about.textYear1,
    },
    {
      year: t.about.year2,
      text: t.about.textYear2,
    },
    {
      year: t.about.year3,
      text: t.about.textYear3,
    },
    {
      year: t.about.year4,
      text: t.about.textYear4,
    },
  ];

  return (
    <section id="sobre-mi" className="section">
      <div className="container about">
        <div className="about-avatar">RB</div>
        <div>
          <p className="kicker">· {t.about.title}</p>
          <h2>{t.about.subTitle}</h2>
          <p>{t.about.text}</p>
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
            <MapPin size={15} /> {t.about.final}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
