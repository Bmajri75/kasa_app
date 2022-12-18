import style from "./TheGalery.module.scss";
import Recipe from "../Recipe/Recip.js";

function TheGalery() {
  return (
    <div className={style.contentCard}>
      <div className={style.grid}>
        <Recipe />
      </div>
    </div>
  );
}

export default TheGalery;
