import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  X,
  Code,
} from "lucide-react";
import type { Project } from "../types";

type Props = { project: Project; onClose: () => void };

function ProjectModal({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const media = project.media;
  const item = media[index];

  const imageProject =
    project.media.length > 0 ? project.media[index]?.src : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, media.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, media.length]);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h3>{project.title}</h3>
          <button className="modal-close" aria-label="Cerrar" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <p className="modal-meta">
          {project.role} · {project.year}
        </p>

        {project.description.map((d, i) => (
          <p key={i} className="modal-desc">
            {d}
          </p>
        ))}

        {item && (
          <div className="modal-media">
            <button
              className="modal-nav"
              aria-label="Anterior"
              onClick={() => {
                if (index - 1 < 0) {
                  setIndex(media.length - 1);
                } else {
                  setIndex(index - 1);
                }
              }}
            >
              <ChevronLeft size={18} />
            </button>
            {/**<div
              className="modal-media-placeholder"
              style={
                !imageProject
                  ? {
                      background: `linear-gradient(135deg, hsl(${project.hue} 55% 46%), hsl(${project.hue + 45} 62% 30%))`,
                    }
                  : {
                      backgroundImage: `url(${imageProject})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: `hsl(220, 17%, 34%)`,
                    }
              }
            >
              <span className="modal-media-type">
                {item.type.toUpperCase()}
              </span>
            </div>**/}
            {imageProject ? (
              <img
                src={imageProject}
                alt={item.label}
                className="modal-image"
                onClick={() => setZoomed(true)}
                style={{ cursor: "zoom-in" }}
              ></img>
            ) : (
              <div
                className="modal-media-placeholder"
                style={{
                  background: `linear-gradient(135deg, hsl(${project.hue} 55% 46%), hsl(${project.hue + 45} 62% 30%))`,
                }}
              ></div>
            )}
            <button
              className="modal-nav"
              aria-label="Siguiente"
              onClick={() => {
                if (index + 1 >= media.length) {
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {media.length > 1 && (
          <div className="modal-dots">
            {media.map((m, i) => (
              <button
                key={i}
                className={`modal-dot ${i === index ? "active" : ""}`}
                aria-label={m.label}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}

        <p className="kicker-projectmodal">Tecnologías</p>
        <div className="chips">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {project.links && (
          <>
            <p className="kicker-projectmodal">Enlaces</p>{" "}
            <div className="modal-links">
              {project.links.demo && (
                <a
                  className="btn"
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={15} />
                  Demo
                </a>
              )}
              {project.links.repo && (
                <a
                  className="btn"
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code size={15} />
                  Código
                </a>
              )}
              {project.links.video && (
                <a
                  className="btn"
                  href={project.links.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Play size={15} />
                  Vídeo
                </a>
              )}
            </div>
          </>
        )}
      </motion.div>
      {zoomed && imageProject && (
        <div
          className="zoom-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setZoomed(false);
          }}
        >
          <img src={imageProject} alt={item.label} className="zoom-image" />
        </div>
      )}
    </motion.div>
  );
}

export default ProjectModal;
