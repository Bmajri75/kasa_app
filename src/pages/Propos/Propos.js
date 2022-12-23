// import de mes composants
import TheBanner from "../../components/Content/TheBanner/TheBanner.js";
import image from "../../asset/images/forma_web/maskGroupPropos.jpg";
import style from "./Propos.module.scss";

function Propos() {
  return (
    <div className={`flex-fill ${style.content} `}>
      <TheBanner image={image} />
    </div>
  );
}

export default Propos;
