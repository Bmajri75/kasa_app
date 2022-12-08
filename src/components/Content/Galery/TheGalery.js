import style from "./TheGalery.module.scss";
import datas from "../../../datas/logements.json";

function TheGalery() {
  return (
    <div>
      <div className={style.content}>
        {datas.map((data) => (
          <div>
            <img src={data.cover} alt="teste"></img>
            <p className={style.titleName}>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheGalery;
