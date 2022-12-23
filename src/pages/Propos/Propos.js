// import de mes composants
import TheBanner from "../../components/Content/TheBanner/TheBanner.js";
import image from "../../asset/images/forma_web/maskGroupPropos.jpg";
import style from "./Propos.module.scss";
import DropDown from "../../components/Content/DropDownLarge/DropDownLarge.js";
// import buttonDown from "../../asset/images/forma_web/404.jpg";

function Propos() {
  const text = "Fiabilité";
  return (
    <div className={`flex-fill ${style.content} `}>
      <TheBanner image={image} />
      <DropDown text={text} />
    </div>
  );
}

export default Propos;
