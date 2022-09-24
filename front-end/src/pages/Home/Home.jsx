import HomeStyles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className={HomeStyles.homeContainer}>
      <img
        src="/assets/hero-img.jpg"
        alt="dog"
        className={HomeStyles.heroImage}
      />

      <div className={HomeStyles.textOverlay}>
        <Navbar />
        <div className={HomeStyles.descContainer}>
          <h2 className={HomeStyles.descHeading}>
            Let's Explore All Dog Breeds
          </h2>

          <button
            className={HomeStyles.getStartedBtn}
            onClick={() => {
              token ? navigate("/breedlisting") : navigate("/register");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export { Home };
