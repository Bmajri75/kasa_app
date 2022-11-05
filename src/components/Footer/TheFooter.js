// mes imports
import { Link } from "react-router-dom";

// import du style
import style from "./TheFooter.module.scss";
import logo from "../../asset/images/forma_web/logoFooter.jpg";

function TheFooter() {
  return (
    <footer className={style.footer}>
      <div>
        <p>The Footer</p>
        <Link to="/">
          <img src={logo} alt="Logo de Kasa"></img>{" "}
        </Link>
      </div>
    </footer>
  );
}

export default TheFooter;
