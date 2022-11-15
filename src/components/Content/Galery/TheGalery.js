import style from "./TheGalery.module.scss";
import data from "../../../datas/logements.json";

function TheGalery() {
  return (
    <div>
      <div className={style.content}>
        <img src={data[0].cover} alt="teste"></img>
      </div>
    </div>
  );
}

export default TheGalery;
