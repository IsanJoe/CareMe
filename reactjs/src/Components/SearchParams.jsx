import { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
import Result from "./Result";
import useBreedList from "./useBreedlist";
import Footer from "./Footer";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // API Credentials: apiKey and secretKey
  let client = new Client({
    apiKey: "niBtNBjjfBJ471GH3kurYqigW0xdgVEjtSeHn21hOEGEBu1apa",
    secret: "axtglKw9ksI5uq1RKP1fREsu5388SQrs8FBShbuK",
  });

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState([]);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    try {
      const res = await client.animal.search({
        type: animal,
        breed: breed,
        address: location,
        limit: 20,
      });
      setPets(res.data.animals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SearchParams">
      <div className="formParams">
        <div className="tagLine">
          <p id="p1">One adoption is enough to change lives.</p>
          <p id="p2">
            Find your next best friend at the animal shelters, rescues, and
            private owners.
          </p>
        </div>

        {/* TODO: Form Area */}
        <div className="container formBackground">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchAnimal();
            }}
          >
            <div className="row d-flex justify-content-center align-items-center">
              {/* for location */}
              <div className="col-xl-4 col-md-6 col-7 d-flex align-items-center flex-column">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  value={location}
                  placeholder="City, State"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              {/* For animals */}
              <div className="col-xl-4 col-md-6 col-7 mt-md-0 mt-1 d-flex align-items-center flex-column">
                <label htmlFor="animal">Animal</label>
                <select
                  id="animal"
                  value={animal}
                  onChange={(e) => {
                    setAnimal(e.target.value);
                    setBreed("");
                  }}
                >
                  <option />
                  {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </div>

              {/* for breed */}
              <div className="col-xl-4 col-md-6 col-7 mt-xl-0 mt-1 d-flex align-items-center flex-column">
                <label htmlFor="breed">Animal Breed</label>
                <select
                  id="breed"
                  value={breed}
                  disabled={!breeds.length}
                  onChange={(e) => {
                    setBreed(e.target.value);
                  }}
                >
                  <option />
                  {breeds.map((breed) => (
                    <option key={breed.name} value={breed.name}>
                      {breed.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <button className="custom-btn btn-2">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="resultArea text-center mb-0 pb-0">
        <div className="p1">
          <p style={{ paddingTop: "10vmin" }}></p>
        </div>
        <p style={{ fontSize: "5vmin", fontWeight: "bolder" }}>
          Featured Animals
        </p>
        <Result pets={pets} />
        <div className="p2">
          <p style={{ paddingTop: "10vmin" }}></p>
        </div>
      </div>

      <div className="mt-0 pt-0">
        <Footer />
      </div>
    </div>
  );
};

export default SearchParams;
