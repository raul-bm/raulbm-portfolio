import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section id="contacto" className="section">
      <div className="container contact">
        <div>
          <p className="kicker">· Contacto</p>
          <h2>¿Hablamos?</h2>
          <p>Si buscas a alguien con muchas ganas de aprender, escríbeme.</p>
          <a className="btn btn-primary" href="mailto:rbenitezmillet@gmail.com">
            <Mail size={16} />
            rbenitezmillet@gmail.com
          </a>
          <p className="section-sub">
            <MapPin size={15} /> España · abierto a remoto
          </p>
          <div className="hero-social">
            {/**<a href="https://github.com/tu-usuario" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>**/}
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSending(true);
            setError(false);
            setSent(false);

            const form = e.currentTarget;
            const formData = new FormData(form);

            try {
              const res = await fetch(
                "https://formsubmit.co/3473931a69e87215b57ff9c37c228326",
                {
                  method: "POST",
                  body: formData,
                },
              );

              if (res.ok) {
                setSent(true);
                form.reset();
              } else {
                setError(true);
              }
            } catch {
              setError(true);
            } finally {
              setIsSending(false);
            }
          }}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuevo mensaje porfolio!"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <label>
            Nombre
            <input
              className="input"
              name="name"
              required
              type="text"
              placeholder="Tu nombre"
            />
          </label>
          <label>
            Email
            <input
              className="input"
              name="email"
              required
              type="email"
              placeholder="tu@email.com"
            />
          </label>
          <label className="full">
            Mensaje
            <textarea
              className="input"
              name="message"
              required
              rows={4}
              placeholder="Cuéntame sobre la oferta..."
            />
          </label>
          <button
            className="btn btn-primary full"
            type="submit"
            disabled={isSending}
          >
            <Send size={16} />
            Enviar mensaje
          </button>
          {sent && (
            <p className="contact-sent">¡Gracias! Te responderé pronto.</p>
          )}
          {error && (
            <p style={{ color: "#ef4444", fontSize: "13px" }}>
              Error al enviar. Escríbeme a rbenitezmillet@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
