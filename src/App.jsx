import Home from "./assets/Home.jsx";
import About from "./assets/About.jsx";
import Contact from "./assets/Contact.jsx";
import Service from "./assets/Service.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./Components/Footer.jsx";
// import Error from "./assets/Error.jsx";
import Navbar from "./Components/Navbar.jsx";


function App() {

  return (
  
   <BrowserRouter>
   <Navbar/>
        <Routes>
          <Route  exact index path="*" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer/>
   </BrowserRouter>
  
  )
}

export default App;
