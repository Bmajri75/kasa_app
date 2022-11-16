import style from "./TheGalery.module.scss";
import datas from "../../../datas/logements.json";

function TheGalery() {
  return (
    <div>
      <div className={style.content}>
        {datas.map((data) => (
          <img src={data.cover} alt="teste"></img>
        ))}
      </div>
    </div>
  );
}

export default TheGalery;
