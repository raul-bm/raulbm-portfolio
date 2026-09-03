const groups = [
  {
    title: "Lenguajes",
    skills: ["JavaScript", "TypeScript", "C++", "C#", "HTML", "CSS", "SQL"],
  },
  {
    title: "Web",
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
    title: "Videojuegos",
    skills: ["Unity", "Gameplay programming", "IA básica"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "Docker", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="kicker">· Skills</p>
        <h2>Tecnologías que uso</h2>
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
