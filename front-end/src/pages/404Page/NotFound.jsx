import { Link } from "react-router-dom";
import NotFoundStyles from "./NotFound.module.css"
   

const  NotFound =() => {
  return (
    <div className={NotFoundStyles.NotFound}>
      <img src="/assets/404-img.svg" alt="Notfound" className={NotFoundStyles.notFoundImage} />
      <p className={NotFoundStyles.linkToHome}>
        Let's go <Link to="/"> home </Link> and and try from there...
      </p>
    </div>
  );
}

export {NotFound};
