import "./Footer.scss";
import linkedin from "../../../public/linkedin_icon.png";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Get in Touch with the Creators</h3>
      <div className="footer__creators">
        <a className="footer__links" href="www.linkedin.com/in/chaofan-ma">
          <p>Chaofan</p>
          <img className="footer__icon" src={linkedin} alt="linkedin" />
        </a>

        <a className="footer__links" href="www.linkedin.com/in/sara-zhiliu-he">
          <p>Sara</p>
          <img className="footer__icon" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <p className="footer__copy">&copy; 2025 Trivia</p>
    </footer>
  );
}

export default Footer;
