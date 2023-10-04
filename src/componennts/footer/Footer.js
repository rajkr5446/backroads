import "./Footer.css";
import { pageLinks } from "../../data";
import { socialLinks } from "../../data";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ id, link, text }) => {
          return (
            <li key={id}>
              <a href={link} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, link, icon }) => {
          return (
            <li key={id}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{d.getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
