// Mes import 
import { Link } from 'react-router-dom';


function TheHeader() {
  return(
    <div>
    <h1> The Header </h1>
    <ul>
     <Link to='/'> <li>Acceuil</li> </Link>
    <Link to='/propos'><li>À propos</li> </Link> 
    </ul>
  </div>
  )
 
}

export default TheHeader