import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useLang } from "../i18n/LanguageContext";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = showAll ? projects : projects.slice(0, 3);

  const { t } = useLang();

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <p className="kicker">· {t.projectsUI.title}</p>
        <h2>{t.projectsUI.subTitle}</h2>
        <p className="section-sub">{t.projectsUI.text}</p>

        <div className="project-grid">
          <AnimatePresence>
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="project-more">
          <p className="project-count">
            {t.projectsUI.showing} {visible.length} {t.projectsUI.of}{" "}
            {projects.length} {t.projectsUI.projectsWord}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? t.projectsUI.showLess : t.projectsUI.showMore}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            key={selected.id}
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
