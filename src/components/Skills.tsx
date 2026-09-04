import { useLang } from "../i18n/LanguageContext";

function Skills() {
  const { t } = useLang();

  const groups = [
    {
      title: t.skills.skillsTitle1,
      skills: ["JavaScript", "TypeScript", "C++", "C#", "HTML", "CSS", "SQL"],
    },
    {
      title: t.skills.skillsTitle2,
      skills: [
        "React",
        "React-Native",
        "Expo",
        "Node.js",
        "Express",
        "REST APIs",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
    {
      title: t.skills.skillsTitle3,
      skills: ["Unity", "Gameplay Programming", "Gameplay IA"],
    },
    {
      title: t.skills.skillsTitle4,
      skills: ["Git", "Docker", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="kicker">· Skills</p>
        <h2>{t.skills.subTitle}</h2>
        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
