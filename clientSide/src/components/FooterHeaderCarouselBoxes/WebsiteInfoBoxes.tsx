import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faShieldAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function WebsiteInfoBoxes() {
  return (
    <div className="websiteAdvantages">
      <div className="oneThirdLi p-3">
        <h6 className="oneThirHeading">
          <FontAwesomeIcon
            icon={faShieldAlt}
            className="faShieldAlt"
          ></FontAwesomeIcon>
          Secure payments
        </h6>
        <p>
          We offer a huge variety of safe payment methods in case you hesitate
          using your card&hellip;
        </p>
        <a href="#" className="orangeAhref">
          <h4 className="orangeAhrefH4">View Details &raquo;</h4>
        </a>
      </div>
      <div className="oneThirdLi p-3">
        <h6 className="oneThirHeading">
          {" "}
          <FontAwesomeIcon
            icon={faHeadset}
            className="faHeadset"
          ></FontAwesomeIcon>
          24/7 Customer Service
        </h6>
        <p>
          Don't hesitate to contact us whenever. A customer service agent is
          always available to a&hellip;
        </p>
        <a href="#" className="orangeAhref">
          <h4 className="orangeAhrefH4">View Details &raquo;</h4>
        </a>
      </div>
      <div className="oneThirdLi p-3">
        <h6 className="oneThirHeading">
          {" "}
          <FontAwesomeIcon
            icon={faShippingFast}
            className="faShippingFast"
          ></FontAwesomeIcon>
          Discounts & Shipping
        </h6>
        <p>
          We offer free shipping on orders over 350 kr & free shipping + 15%
          discount to students, army persone&hellip;
        </p>
        <a href="#" className="orangeAhref">
          <h4 className="orangeAhrefH4">View Details &raquo;</h4>
        </a>
      </div>
    </div>
  );
}

export default WebsiteInfoBoxes;
