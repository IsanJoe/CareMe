import { Client } from "@petfinder/petfinder-js";

let client = new Client({
  apiKey: "niBtNBjjfBJ471GH3kurYqigW0xdgVEjtSeHn21hOEGEBu1apa",
  secret: "axtglKw9ksI5uq1RKP1fREsu5388SQrs8FBShbuK",
});
const fetchPet = async ({ queryKey }) => {
  // const id = queryKey[1]
  // const res = await client.animal.show(id);

  // if (!res.ok) {
  //     throw new Error(`details/${id} fetch not ok`);
  // }

  // return res;
  try {
    const id = queryKey[1];
    const res = await client.animal.show(id);
    return res.data.animal;
  } catch (error) {
    throw new Error(`details/${id} fetch not ok`);
  }
};

export default fetchPet;
