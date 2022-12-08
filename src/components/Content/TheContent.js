import TheGalery from "./Galery/TheGalery";
import TheBanner from "./TheBanner/TheBanner.js";
//import styles from "./TheContent.module";

function Content() {
  return (
    <div className="flex-fill container">
      <div>
        <TheBanner />
        <TheGalery />
      </div>
    </div>
  );
}

export default Content;
