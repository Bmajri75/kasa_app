import style from "./DropDownLarge.module.scss";

function DropDown({ name, button }) {
  return (
    <div className={`d-flex ${style.content}`}>
      <p>{name}</p>
      <img src={button} alt="button Drop"></img>
    </div>
  );
}

// IL FAUT AJOUTER A LA PROPS LE DROPDOWN ET LE TEXTE

export default DropDown;
