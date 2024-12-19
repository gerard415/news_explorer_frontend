import "./Footer.css";
import { Link } from "react-router-dom";
import linkedin from "../../images/linkedin-icon.svg";
import Github from "../../images/github.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <div className="footer__links-container">
            <Link to="/" className="footer__link footer__link_home">
              Home
            </Link>
            <a
              href="https://tripleten.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link_tripleten"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com/mouachee"
              className="footer__social-link footer__social-link_github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" className="footer__social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/chinedum-ike/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link footer__social-link_github"
            >
              <img
                src={linkedin}
                alt="LinkedIn Profile Icon"
                className="footer__social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
