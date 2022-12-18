import TheGalery from "./Galery/TheGalery";
import TheBanner from "./TheBanner/TheBanner.js";
import style from "./TheContent.module.scss";

function Content() {
  return (
    <div className="flex-fill container">
      <div className={style.content}>
        <TheBanner />
        <TheGalery />
      </div>
    </div>
  );
}

export default Content;
