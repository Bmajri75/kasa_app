import TheHeader from "../../components/Header/TheHeader.js";
import Error from "../../components/Content/TheError/TheError";

function ErrorPage() {
  return (
    <div className="flex-fill">
      <TheHeader />
      <Error />
    </div>
  );
}

export default ErrorPage;
