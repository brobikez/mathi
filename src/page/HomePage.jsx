import About from "../components/About/About";
import Settings from "../components/settings/setting";
import Help from "../components/help/help";
import Hero from "../components/Hero/Hero";

import HostingCalculation from "../components/HostingCalculation/hostingcal";
import HowToBook from "../components/HowToBook/HowToBook";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import PopularPlacesNearMe from "../components/PopularPlaces/popularplaces";
import PressMedia from "../components/press/press";
import Reviews from "../components/Reviews/Reviews";
import Impact from "../components/impact/impact";
import Safety from "../components/safety/Safety";
import ContactUs from "../components/Contact/contact";



export default function HomePage(){
  

    return(
        <>
        <Hero/>
        <About/> 
        

       
        <HostingCalculation/>
        <HowToBook/>
        <WhyChoose/>
        <PopularPlacesNearMe/>

        <Reviews/>
        <Impact/>
        <Help/>
        <PressMedia/>
        <Safety/>
        {/* <Settings/> */}
        <ContactUs/>
       
    
      

                                  
        </>
    )
}