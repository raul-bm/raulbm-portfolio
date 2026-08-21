import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "../types";

type Props = { project: Project; onSelect: (project: Project) => void };

function ProjectCard({ project, onSelect }: Props) {
  const imageProject = project.media.length > 0 ? project.media[0]?.src : null;

  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelect(project)}
    >
      <div
        className="project-card-media"
        style={
          !imageProject
            ? {
                background: `linear-gradient(135deg, hsl(${project.hue} 55% 46%), hsl(${project.hue + 45} 62% 30%))`,
              }
            : {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageProject})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: `hsl(221, 53%, 82%)`,
              }
        }
      >
        <span className="project-card-cat">{project.category}</span>
        {project.featured && (
          <span className="project-card-cat2">DESTACADO</span>
        )}
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.short}</p>
        <div className="chips">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && <span className="chip">...</span>}
        </div>
        <span className="project-card-link">
          Ver proyecto <ArrowRight size={15} />
        </span>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
