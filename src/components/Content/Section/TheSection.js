import style from "./TheSection.module.scss";
import image from "../../../asset/images/forma_web/IMG.jpg";

function TheSection() {
  return (
    <div className={style.section}>
      <img src={image} alt="magnifique plage"></img>
    </div>
  );
}

export default TheSection;
