import GoogleMapContact from "../comps/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="general-contact">
      <div className="contact-form">
        <div className="contact-me">
          <h2>CONTACT ME</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tenetur obcaecati dignissimos vel accusantium quos ipsa maiores
            mollitia, non hic. Nulla dicta sed architecto aspernatur consectetur
            nesciunt nihil minima vitae!
          </p>
        </div>
        <h3>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>MAIL</span>
        </h3>

        <p>alexandra.newman@.gmail.com</p>

        <h3>
          <FontAwesomeIcon icon={faPhone} />
          <span>PHONE</span>
        </h3>

        <p>+49-151-3651738</p>

        <h3>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>ADDRESS</span>
        </h3>

        <p>Pariser Platz 4A, 10117 Berlin</p>

        <img
          className="circles-middle2-contact"
          src="images/circles-middle2.png"
          alt="circles-middle-contact"
        />
      </div>

      <div className="map-contact">
        <GoogleMapContact isMarkerShown={true} />
      </div>
    </div>
  );
};

export default Contact;
