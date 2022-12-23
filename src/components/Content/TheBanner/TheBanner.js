import style from "./TheBanner.module.scss";

function TheBanner({ image, text }) {
  return (
    <div className={style.section}>
      <div>
        <img src={image} alt="magnifique plage"></img>
        <p className={style.texte}>{text}</p>
      </div>
    </div>
  );
}

export default TheBanner;
