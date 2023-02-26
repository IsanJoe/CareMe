import { Link } from "react-router-dom";
import NoImage from "./img/NoImage.jpg";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = NoImage;
  if (images.length) {
    hero = images[0].full;
  }
  return (
    <Link to={`/details/${id}`}>
      <div className="pet">
        <div className="d-flex flex-column align-items-center">
          <img src={hero} alt={name} />
          <div className="info">
            <p
              className="mt-2"
              style={{
                fontSize: "3.5vmin",
                color: "rgb(86,169,236)",
                fontWeight: "600",
              }}
            >
              {name}
            </p>
            <p
              className="mb-0 pb-0"
              style={{ fontSize: "2.5vmin", color: "black" }}
            >
              <span style={{ fontWeight: "600" }}>{breed} </span>
              <span>|</span>
              <span> {animal}</span>
            </p>
            <p style={{ fontSize: "2.5vmin", color: "black" }}>
              <span>Location: </span>
              <span style={{ fontWeight: "600" }}>{location}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pet;
