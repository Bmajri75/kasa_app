import TheGalery from "./Galery/TheGalery";
import TheBanner from "./TheBanner/TheBanner.js";

function Content() {
  return (
    <div className="flex-fill">
      <TheBanner />
      <TheGalery />
    </div>
  );
}

export default Content;
