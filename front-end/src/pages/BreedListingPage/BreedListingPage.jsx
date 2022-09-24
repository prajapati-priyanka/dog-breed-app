import { useEffect, useState } from "react";
import BreedListingStyles from "./BreedListingPage.module.css";
import { BreedCard, Navbar } from "../../components";
import { getAllBreedsList } from "../../services";

const BreedListing = () => {
  const [allBreeds, setAllBreeds] = useState({});

  useEffect(() => {
    getAllBreedsList(setAllBreeds);
  }, []);

  return (
    <>
      <Navbar />
      <h1 className={BreedListingStyles.pageHeading}>All Breeds</h1>
      <main className={BreedListingStyles.mainContainer}>
        {Object.keys(allBreeds).map((breed, index) => (
          <BreedCard breed={breed} subBreed={allBreeds[breed]} key={index} />
        ))}
      </main>
    </>
  );
};

export { BreedListing };
