// import de mes composants
import TheBanner from "../../components/Content/TheBanner/TheBanner.js";
import image from "../../asset/images/forma_web/bcgBannerApropos.jpg";
import DropDown from "../../components/Content/DropDownLarge/DropDownLarge.js";
import buttonDown from "../../asset/images/forma_web/button/vectorDown.svg";

function Apropos() {
  const fiabilité = "Fiabilité";
  const service = "Service";
  const responsabilite = "Responsabilité";
  return (
    <div className={`flex-fill d-flex flex-column align-items-center `}>
      <TheBanner image={image} />
      <DropDown name={fiabilité} button={buttonDown} />
      <DropDown name={service} button={buttonDown} />
      <DropDown name={responsabilite} button={buttonDown} />
    </div>
  );
}

export default Apropos;
