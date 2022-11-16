import style from "./TheBanner.module.scss";
import image from "../../../asset/images/forma_web/IMG.jpg";

function TheBanner() {
  return (
    <div className={style.section}>
      <p className={style.texte}>Chez vous, partout et ailleurs</p>
      <img src={image} alt="magnifique plage"></img>
    </div>
  );
}

export default TheBanner;
