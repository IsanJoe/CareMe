import { Link } from "react-router-dom";
import Logo from "./img/Logo.svg";

const Header = () => {
  return (
    <div className="header fixed-top">
      <div className="container">
        <div className="row d-flex align-items-center pt-3">
          <div className="col-4">
            <Link to="/">
              <img src={Logo} alt="CareMe Logo" />
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-end gap-3">
            <p className="span">
              <span
                style={{
                  fontSize: "2.5vmin",
                  padding: "1.2vmin",
                  backgroundColor: "#15382A",
                  borderRadius: "1vmin",
                  boxShadow: "2px 2px 7px 0 rgb(0, 0, 0, 0.2)",
                  height: "fit-content",
                }}
              >
                Contact Me : (+63) 949-086-1004{" "}
              </span>
              <span
                style={{
                  fontSize: "2.5vmin",
                  padding: "1.2vmin",
                  backgroundColor: "#15382A",
                  borderRadius: "1vmin",
                  boxShadow: "2px 2px 7px 0 rgb(0, 0, 0, 0.2)",
                  height: "fit-content",
                }}
              >
                nessanjoeipulan@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
