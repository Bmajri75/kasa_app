// import de mes composants
import TheBanner from "../../components/Content/TheBanner/TheBanner.js";
import image from "../../asset/images/forma_web/bcgBannerApropos.jpg";
import DropDown from "../../components/Content/DropDownLarge/DropDownLarge.js";
import buttonDown from "../../asset/images/forma_web/button/vectorDown.svg";

function Apropos() {
  const fiabilité = "Fiabilité";
  const service = "Service";
  const respect = "Respect";
  const responsabilite = "Responsabilité";
  const text =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  return (
    <div className={`flex-fill d-flex flex-column align-items-center `}>
      <TheBanner image={image} />
      <DropDown name={fiabilité} button={buttonDown} text={text} />
      <DropDown name={respect} button={buttonDown} text={text} />
      <DropDown name={service} button={buttonDown} text={text} />
      <DropDown name={responsabilite} button={buttonDown} text={text} />
    </div>
  );
}

export default Apropos;
