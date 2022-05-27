import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideComp from './components/SideComp';
import Rightsec from './components/Rightsec';
import Show from './Show';


function App() {
  return (
    <div className="App">
     <Navbar />
     <SideComp />
     <Rightsec />
     <Show />
     <Footer />
    </div>
  );
}

export default App;
