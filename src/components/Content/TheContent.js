import TheGalery from "./Galery/TheGalery";
import TheSection from "./Section/TheSection";

function Content() {
  return (
    <div className="flex-fill">
      <h2>The Content</h2>
      <TheSection />
      <TheGalery />
    </div>
  );
}

export default Content;
