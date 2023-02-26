import Logo from "./img/Logo.svg";
import NesLogo from "./img/NesLogo.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-10 text-center">
              <img className="img1" src={Logo} alt="Care Me Logo" />
              <p className="p1">
                Adopt a best friend. Extend your love and care to them.
              </p>
              <p className="p2">
                Until one has loved an animal, a part of one’s soul remains
                unawakened.
              </p>
            </div>
            <div className="col-lg-6 col-10 text-center">
              <img
                className="rounded"
                src={NesLogo}
                alt="Kneesun-Ju Ideas Logo"
              />
              <p className="d-flex gap-1 justify-content-center p3">
                <span>Created by me</span>
                <span>
                  <i class="fa fa-copyright" aria-hidden="true"></i>
                </span>
                <span>twentytwentythree</span>
              </p>
              <p className="p4">We create and develop for your convenience!</p>
            </div>
          </div>
        </div>
      </div>
      <p className="message">
        Start a project with me? Message me now: (+63) 949-086-1004 |
        nessanjoeipulan@gmail.com
      </p>
    </div>
  );
};

export default Footer;
