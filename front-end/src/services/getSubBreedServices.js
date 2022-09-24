import axios from "axios";

const getSubBreed = async (breed, subBreed, setRes) => {
  try {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
    );

    if (response.status === 200) {
      setRes(response.data.message);
    } else {
      throw new Error("Request Failed, Can't get Data");
    }
  } catch (error) {
    console.error(error);
  }
};

export { getSubBreed };
