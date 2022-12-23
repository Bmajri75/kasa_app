import TheGalery from "../Galery/TheGalery.js";
import TheBanner from "../TheBanner/TheBanner.js";
import style from "./TheContent.module.scss";
import image from "../../../asset/images/forma_web/maskGroup.jpg";

function Content() {
  const text = "Chez vous, partout et ailleurs";

  return (
    <div className="flex-fill container">
      <div className={style.content}>
        <TheBanner image={image} text={text} />
        <TheGalery />
      </div>
    </div>
  );
}

export default Content;
