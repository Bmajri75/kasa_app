import { Link } from "react-router-dom";
import style from "./Recipe.module.scss";
import datas from "../../../datas/logements.json";

function handleClick(e) {
  return console.log(e);
}
function Recipe() {
  return datas.map((data) => (
    <Link to="/logement">
      <div
        className={style.imageContainer}
        onClick={() => handleClick(data.title)}
      >
        <img src={data.cover} alt={data.title}></img>
        <p className={style.recipeTitle}>{data.title}</p>
      </div>
    </Link>
  ));
}
export default Recipe;
