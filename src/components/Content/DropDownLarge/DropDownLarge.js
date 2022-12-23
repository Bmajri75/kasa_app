import Style from "./DropDownLarge.module.scss";

function DropDown({ name, button }) {
  return (
    <div>
      <div className={Style.content}>
        <p>
          {name} {button}
        </p>
      </div>
    </div>
  );
}

// IL FAUT AJOUTER A LA PROPS LE DROPDOWN ET LE TEXTE

export default DropDown;
