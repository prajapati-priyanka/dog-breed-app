import axios from "axios";

const getAllBreedsList = async (setAllBreeds) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (response.status === 200) {
     
    setAllBreeds(response.data.message)
    } else {
      throw new Error("Request Failed, Can't get Data");
    }
  } catch (error) {
    console.error(error);
  }
};

export { getAllBreedsList  };
