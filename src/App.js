// Import de mes autre composant 
import TheHeader from './components/Header/TheHeader';
import TheFooter from './components/Footer/TheFooter';

// import de mes modules
import { Outlet } from 'react-router';

// import de mon CSS 
import './App.css';

function App() {
  return (
    <div>
      <TheHeader />
      <div>
        {/* je rend uniquement Outlet qui gere le routing  */}
        <Outlet />
      </div>
      <TheFooter />
    </div>
  );
}

export default App;
