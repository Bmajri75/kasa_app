// Import de mes autre composant
import TheHeader from "./components/Header/TheHeader";
import TheFooter from "./components/Footer/TheFooter";

// import de mes modules
import { Outlet } from "react-router";

//import module Style
import styles from "./App.module.scss";

function App() {
  return (
    // j'utilise le binding pour recuperer la class appContainer dans le fichier modules.scss
    // pour l'apliquer uniquement a ce fichier App qui est le component principal
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </div>
  );
}

export default App;
