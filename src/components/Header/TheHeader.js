// Mes import
import { Link } from "react-router-dom";
// import du style
import style from "./TheHeader.module.scss";
import logo from "../../asset/images/forma_web/LOGO.jpg";

function TheHeader() {
  return (
    <header className={style.header}>
      <nav className="d-flex flex-row align-items-center">
        <div className="flex-fill">
          <img src={logo} alt="Logo de Kasa"></img>
        </div>
        <ul className="d-flex">
          <li>
            {" "}
            <Link to="/" className="mr-15">
              {" "}
              Acceuil{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Apropos">À propos </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;
