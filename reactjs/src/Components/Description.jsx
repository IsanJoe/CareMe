import NoImage from "./img/NoImage.jpg";
import Footer from "./Footer";

const Description = ({
  name,
  photo,
  type,
  breed,
  place,
  gender,
  size,
  status,
  description,
  age,
}) => {
  let img = "";
  if (photo == null || photo.length == 0) {
    img = NoImage;
  } else {
    img = photo[0].full;
  }

  let breeds = "";
  if (breed == null || breed.length == 0) {
    breeds = "";
  } else {
    breeds = breed.primary;
  }

  let location = "";
  if (place == null || place.length == 0) {
    location = "";
  } else {
    location = `${place.address.city}, ${place.address.state}`;
  }

  return (
    <>
      <div className="description">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 col-10 text-center">
              <img id="img1" src={img} alt={name} />
            </div>
            {/* This will display 768px above */}
            <div className="col-md-6 d-md-block d-none">
              <p id="p1" className="mb-0 pb-0">
                {name}
              </p>
              <p id="p2" className="d-flex gap-2 mb-0 pb-0 mt-0 pt-0">
                <span id="span1">{breeds}</span>
                <span>|</span>
                <span>{type}</span>
              </p>
              <p id="p3" className="mt-0 pt-0">
                {location}
              </p>
              <div>
                <button>Adopt Now!</button>
              </div>
            </div>
            {/* This will display 768px below */}
            <div className="col-10 d-md-none d-block mt-3">
              <p id="p1" className="text-center">
                {name}
              </p>
              <p id="p2" className="d-flex gap-2 mb-0 justify-content-center">
                <span id="span1">{breeds}</span>
                <span>|</span>
                <span>{type}</span>
              </p>
              <p id="p3" className="text-center">
                {location}
              </p>
              <div className="text-center">
                <button>Adopt Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description2">
        <div className="container">
          <p id="p1">Info about me</p>
          <div className="row info1">
            <div className="col-6">
              <p>
                Breed: <span id="span">{breeds}</span>
              </p>
              <p>
                Animal type: <span id="span">{type}</span>
              </p>
              <p>
                Age: <span id="span">{age}</span>
              </p>
            </div>
            <div className="col-6">
              <p>
                Gender: <span id="span">{gender}</span>
              </p>
              <p>
                Size: <span id="span">{size}</span>
              </p>
            </div>
          </div>
          <div className="info2">
            <p id="p2">My current status</p>
            <p id="des">{status}</p>
          </div>
          <div>
            <p id="p3">My Story</p>
            <p id="des">{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Description;
