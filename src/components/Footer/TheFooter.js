// mes imports
import { Link } from "react-router-dom";

// import du style
import style from "./TheFooter.module.scss";
import logo from "../../asset/images/forma_web/logo_footer.svg";

function TheFooter() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo de Kasa"></img>{" "}
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default TheFooter;
