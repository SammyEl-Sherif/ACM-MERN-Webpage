import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTemplate, homeObjTwo} from '../components/InfoSection/Data';
import Footer from '../components/Footer';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjTemplate}/> 
        <InfoSection {...homeObjTwo}/> 
        {/* Here is where a new Data Object would be put just like the line above (also check import statements) */}
        <Footer/>
    </>
  )
}

export default Home