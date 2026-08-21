import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <p className="kicker">· Proyectos</p>
        <h2>Lo que he construido</h2>
        <p className="section-sub">
          Haz clic en cualquier proyecto para ver capturas, GIFs y enlaces.
        </p>

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
            Mostrando {visible.length} de {projects.length} proyectos
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? "Mostrar menos proyectos" : "Mostrar más proyectos"}
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
