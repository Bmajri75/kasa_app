import style from "./TheError.module.scss";
import image from "../../../asset/images/forma_web/404.jpg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      className={`container d-flex flex-column align-items-center ${style.display}`}
    >
      <img src={image} alt=" Code 404"></img>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>{" "}
      <Link to="/">
        {" "}
        <p className={style.errorStyle}>Retourner sur la page d'accueil</p>{" "}
      </Link>
    </div>
  );
}

export default Error;
