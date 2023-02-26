import { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";

const localCache = {};

const useBreedList = (animal) => {
  let client = new Client({
    apiKey: "niBtNBjjfBJ471GH3kurYqigW0xdgVEjtSeHn21hOEGEBu1apa",
    secret: "axtglKw9ksI5uq1RKP1fREsu5388SQrs8FBShbuK",
  });
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    // async function requestBreedList() {
    //     setBreedList([]);
    //     setStatus("loading");
    //     const res = await fetch(
    //         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    //     );
    //     const json = await res.json();
    //     localCache[animal] = json.breeds || [];
    //     setBreedList(localCache[animal]);
    //     setStatus("loaded");
    // }
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await client.animalData.breeds(animal);
      localCache[animal] = res.data.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
};

export default useBreedList;
