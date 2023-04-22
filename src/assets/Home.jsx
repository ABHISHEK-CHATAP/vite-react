import React from 'react'
import Herosection from '../Components/Herosection';
import hero5 from "../Components/Images/hero5.png";
import Contact from './Contact';

const Home = () => {
// props by spread operator
  
  
  return (
   <>
     <Herosection  name="UNICORN ABHISHEK" img={hero5}/>
     <Contact/>
   
   </>
  )
}

export default Home;