import { Client } from "@petfinder/petfinder-js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Description from "./Description";

const Details = () => {
  let client = new Client({
    apiKey: "niBtNBjjfBJ471GH3kurYqigW0xdgVEjtSeHn21hOEGEBu1apa",
    secret: "axtglKw9ksI5uq1RKP1fREsu5388SQrs8FBShbuK",
  });
  const { id } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    try {
      const res = await client.animal.show(id);
      setPets(res.data.animal);
      console.log(res.data.animal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Description
        name={pets.name}
        photo={pets.photos}
        type={pets.type}
        breed={pets.breeds}
        place={pets.contact}
        gender={pets.gender}
        size={pets.size}
        status={pets.status}
        description={pets.description}
        age={pets.age}
      />
      {/* <p>{pets.name}</p>
      <p>{pets.age}</p> 
      <p>{pets.description}</p>
      <p>{pets.type}</p> */}
      {/* <p>{pets.breeds.primary} - {pets.breeds.secondary}</p>
      <p>{pets.contact.address.address1}, {pets.contact.address.city}, {pets.contact.address.state}, {pets.contact.address.postcode}</p>
      <p>{pets.gender}</p>
      <p>{pets.size}</p>
         */}
      {/* <img src={image} className='w-50' alt={pets.name} /> */}
    </div>
  );
};

export default Details;
