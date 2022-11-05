//!  ce fichier gére l'affichage des pages.
//!  il est appelé sur app.js
//!  avec le routeur ci dessous il indique quel page dois être afficher

// import module
import { createBrowserRouter } from "react-router-dom";

// import des pages
import App from "../App";
import Propos from "../pages/Propos/Propos";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Homepage from "../pages/Homepage/Homepage";

// je cree et export mon router avec les routes
export const router = createBrowserRouter([
  {
    path: "/", //ici la route demander
    element: <App />, // l'elemetn rendu qui est l'element raçine
    errorElement: <ErrorPage />, // errorElement indique que si aucun chemin n'a trouver la page demander il irra ici
    // petite particularité pour pouvoir rendre uniquement le homepage,
    //je le place sur la meme route et il est donner dans l'objet children.
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/propos",
        element: <Propos />,
      },
    ],
  },
]);
