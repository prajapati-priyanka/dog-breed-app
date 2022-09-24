import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BreedDetailsStyles from "./BreedDetailsPage.module.css";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";
import { getSubBreed } from "../../services";

const BreedDetails = () => {
  const [res, setRes] = useState(null);
  const location = useLocation();
  const segments = location.pathname.split("/");
  const breed = segments[segments.length - 2];
  const subBreed = segments[segments.length - 1];

  useEffect(() => {
    getSubBreed(breed, subBreed, setRes);
  }, [breed, subBreed]);

  return (
    <div className={BreedDetailsStyles.subBreedContainer}>
      <Navbar />
      <div className={BreedDetailsStyles.subBreedCard}>
        <figure className={BreedDetailsStyles.subBreedHeader}>
          <img
            src={res}
            alt="dog"
            className={BreedDetailsStyles.subBreedImage}
          />
        </figure>

        <section className={BreedDetailsStyles.subBreedBody}>
          <h5 className={BreedDetailsStyles.subBreedName}>{subBreed}</h5>
        </section>
      </div>
      <Link to="/breedlisting" className={BreedDetailsStyles.navigationLink}>
        Go To All Breeds Page
      </Link>
    </div>
  );
};

export { BreedDetails };
