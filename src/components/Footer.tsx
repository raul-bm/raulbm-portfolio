import { useLang } from "../i18n/LanguageContext";

function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        © 2026 Raúl · {t.footer.made} ·{" "}
        <a href="https://github.com/raul-bm">GitHub</a> ·{" "}
        <a href="https://www.linkedin.com/in/ra%C3%BAl-ben%C3%ADtez-millet-b9a713430">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
