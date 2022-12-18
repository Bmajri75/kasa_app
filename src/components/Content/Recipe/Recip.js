import style from "./Recipe.module.scss";
import datas from "../../../datas/logements.json";

function Recipe() {
  return datas.map((data) => (
    <div className={style.imageContainer}>
      <img src={data.cover} alt={data.title}></img>
      <p className={style.recipeTitle}>{data.title}</p>
    </div>
  ));
}
export default Recipe;
