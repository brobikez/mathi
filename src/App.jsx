import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Settings from "./components/settings/setting";
import Footer from "./components/Footer/Footer";
import HomePage from "./page/HomePage";
import HostAuth from "./components/Host/HostAuth";
       

import Career from "./components/career/career";
import Admin from "./Admin/Admin";

import HostLogin from "./components/Host/hostLogin";

import UserLogin from './components/User/userLogin';
import UserSignup from './components/User/userSignup';
import UserAuth from './components/User/UserAuth';

import Help from "./components/help/help";
import Press from "./components/press/press";
import Safety from "./components/safety/Safety";
import { ThemeProvider } from './context/ThemeContext';

import TermsAndConditions from "./components/TermsAndCondition/TermsAndCondition";

// bharathi
import CarPartnershipHome from "./components/CarPartnership/CarPartnershipHome";
import StepperForm from "./components/CarPartnership/StepperForm";
import ChooseYourPartnership from "./components/CarPartnership/CarPartnerForm/ChooseYourPartnership";
import RegistedCarPartnerHome from "./components/CarPartnership/RegistedCarPartnerHome";
import EditRentalDuration from "./components/CarPartnership/EditRentalDuration";
import ProfileForVehiclePartner from "./components/CarPartnership/ProfileForVehiclePartner/ProfileForVehiclePartner";


//fay

import Carinformation from "./components/CustomerForBikeCar/CarDetail/Carinformation/Carinformation";


// import Carinformation from "./components/Carinformation/Carinformation";
import Fourcarinfor from "./components/CustomerForBikeCar/CarDetail/Carinformation/Fourcarinfor";
import Fivecarinfor from "./components/CustomerForBikeCar/CarDetail/Carinformation/Fivecarinfor";
import Sevencarinfor from  "./components/CustomerForBikeCar/CarDetail/Carinformation/Sevencarinfor";
import Booking from "./components/CustomerForBikeCar/CarDetail/Carinformation/Booking";
import Fivebook from "./components/CustomerForBikeCar/CarDetail/Carinformation/Fivebook";
import Sevenbook from "./components/CustomerForBikeCar/CarDetail/Carinformation/Sevenbook";
import Foursubmit from "./components/CustomerForBikeCar/CarDetail/Submit/Foursubmit";
import Fivesubmit from "./components/CustomerForBikeCar/CarDetail/Submit/Fivesubmit";
import Sevensubmit from "./components/CustomerForBikeCar/CarDetail/Submit/Sevensubmit";
import Fourpayment from "./components/CustomerForBikeCar/CarDetail/Payment/Fourpayment";
import Bikeinformation from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Bikeinformation";
// import Fivecarinfor from "./components/Carinformation/Fivecarinfor";
// import Sevencarinfor from "./components/Carinformation/Sevencarinfor";
// import Booking from "./components/Carinformation/Booking";
// import Fivebook from "./components/Carinformation/Fivebook";
// import Sevenbook from "./components/Carinformation/Sevenbook";
// import Foursubmit from "./components/Submit/Foursubmit";
// import Fivesubmit from "./components/Submit/Fivesubmit";
// import Sevensubmit from "./components/Submit/Sevensubmit";
// import Fourpayment from "./components/Payment/Fourpayment";
// import Bikeinformation from "./components/Bikeinformation/Bikeinformation";

import Normalbikeinfor from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Normalbikeinfor";
import Superbike from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Superbike";
import Luxuriousbike from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Luxuriousbike";
import Fourbikebook from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Fourbikebook";
import Fivebikebook from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Fivebikebook";
import Sevenbikebook from "./components/CustomerForBikeCar/BikeDetail/Bikeinformation/Sevenbikebook";
import Fourbikesubmit from "./components/CustomerForBikeCar/BikeDetail/Bikesubmit/Fourbikesubmit";
import Fivebikesubmit from "./components/CustomerForBikeCar/BikeDetail/Bikesubmit/Fivebikesubmit";
import Sevenbikesubmit from "./components/CustomerForBikeCar/BikeDetail/Bikesubmit/Sevenbikesubmit";
import Fourpay from "./components/CustomerForBikeCar/BikeDetail/Bikepay/Fourpay";
import CustomerMainPage from "./components/CustomerForBikeCar/CustomerMainpage/CustomerMainPage";

//deena

import DriverDashboard from "./components/DriverDashboard/DriverDashboard"; 


         


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/hostauth" element={<HostAuth />} />
        <Route path="/userauth" element={<UserAuth />} />

        <Route path="/career" element={<Career />} />
        <Route path="/hostlogin" element={<HostLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userSignup" element={<UserSignup />} />
     
        <Route path="/settings" element={<Settings />} />
        <Route path="Help" element={<Help />} />
        <Route path="Press" element={<Press />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />

        {/* bharathi */}
        <Route path="/carpartnershiphome" element={<CarPartnershipHome />} />
        <Route path="/chooseyourpartnership" element={<ChooseYourPartnership />} />
        <Route path="/stepperform" element={<StepperForm />} />
        {/* <Route path="/stepperform1" element={<StepperForm step={1} />} />
        <Route path="/stepperform2" element={<StepperForm step={2} />} />
        <Route path="/stepperform3" element={<StepperForm step={3} />} />
        <Route path="/stepperform4" element={<StepperForm step={4} />} />
        <Route path="/stepperform5" element={<StepperForm step={5} />} /> */}
        <Route path="/registedcarpartnerhome" element={<RegistedCarPartnerHome />} />
        <Route path="/editrentalduration" element={<EditRentalDuration />} />
        <Route path="/profileforvehiclepartner" element={<ProfileForVehiclePartner />} />


        <Route path="/CustomerForBikeCar" element={<CustomerMainPage />} />

        <Route path="/carinformation" element={<Carinformation />} />
        <Route path="/fourcarinfor" element={<Fourcarinfor />} />
       <Route path="/fivecarinfor" element={<Fivecarinfor />} />
       <Route path="/sevencarinfor" element={<Sevencarinfor />} />
       <Route path="/booking" element={<Booking />} />
       <Route path="/fivebook" element={<Fivebook />} />
       <Route path="/sevenbook" element={<Sevenbook />} />
       <Route path="/foursubmit" element={<Foursubmit />} />                                           
       <Route path="/fivesubmit" element={<Fivesubmit />} />
       <Route path="/sevensubmit" element={<Sevensubmit />} />                                                                  
       <Route path="/fourpayment" element={<Fourpayment />} />
       <Route path="/fourpayment" element={<Fourpayment />} />
       <Route path="/bikeinformation" element={<Bikeinformation />} />
       <Route path="/normalbikeinfor" element={<Normalbikeinfor />} />
       <Route path="/superbike" element={<Superbike />} />
       <Route path="/luxuriousbike" element={<Luxuriousbike />} />
      <Route path="/fourbikebook" element={<Fourbikebook />} />
      <Route path="/fivebikebook" element={<Fivebikebook />} />
      <Route path="/sevenbikebook" element={<Sevenbikebook />} />

      <Route path="/fourbikesubmit" element={<Fourbikesubmit />} />
      <Route path="/fivebikesubmit" element={<Fivebikesubmit />} />
      <Route path="/sevenbikesubmit" element={<Sevenbikesubmit />} />
      <Route path="/fourpay" element={<Fourpay />} /> 
      <Route path="customermainpage" element={<CustomerMainPage />} />


        {/* deena */}

        <Route path="/DriverDashboard" element={<DriverDashboard />} />



      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;