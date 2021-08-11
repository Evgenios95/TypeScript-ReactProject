import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="Tradishional-Footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              quas delectus assumenda, saepe adipisci at natus similique alias
              illo eveniet reprehenderit ea aperiam, hic nostrum soluta impedit
              iure ex ab. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Saepe perferendis voluptate odit quam eaque, explicabo
              voluptatibus!
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Best cheese EU?</a>
              </li>
              <li>
                <a href="#">Best spirits EU?</a>
              </li>
              <li>
                <a href="#">Best everything?</a>
              </li>
              <li>
                <a href="#">Best every-everything?</a>
              </li>
              <li>
                <a href="#">Saul Goodmaaaaan👨‍⚖️</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">Tradishional-GR</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
