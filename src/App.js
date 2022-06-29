import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useEffect } from "react";
import { ContactUs } from './pages/Contact';
function App() {
  
useEffect(() => {
  // 👇️ scroll to top on page load
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}, []);

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/projects' exact element={<Projects/>}/>
          <Route path='/services' exact element={<Services/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<ContactUs/>}/>

        </Routes>
        <Footer/>

      
      </Router>


    </div>
  );
}

export default App;
