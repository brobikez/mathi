import React from 'react'
import FAQ from '../FAQ'
import Review from '../Review'
import ProtectionContent from '../ProtectionContent'
import About from '../../About/About'
import ContactUs from '../../Contact/contact'
import { Link } from 'react-router-dom'
import Title from '../../Title/Title'

const RegisteredNavabarHomePage = () => {
  return (
    <div>
        <div className='herosection container flex flex-col md:flex-row lg:flex-row  justify-around items-center mx-auto'>
            <div className="herotext w-full md:w-1/2 flex flex-col justify-center items-center">
            {/* <Title title="Welcome Aboard! Your Vehicle is Ready to Earn with Us!" /> */}
                <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl text-center p-1 md:p-2 font-bold '>Welcome Aboard! Your Vehicle is Ready to Earn with Us!</h1>
                <h2 className='text-center text-base md:text-base lg:text-lg xl:text-xl p-1 md:p-2 '>Thank You for Registering!</h2>
                <Link to={"/profileforvehiclepartner"}>
                <button className='bg-orange-400 hover:bg-orange-500 font-medium rounded-full uppercase m-4 lg:m-5 p-3 lg:p-4 px-4 lg:px-5 lg:text-lg'>Go To Profile</button>
                </Link>
                

            </div>
            <div className="heroimg p-3 md:p-2">
                <img className='rounded-3xl' src="https://www.shutterstock.com/image-photo/business-men-agreement-deal-hands-600nw-557814574.jpg" alt="carpartnership-img" />

            </div>
        </div>

        <ProtectionContent />
        <About />
        <FAQ />
        <Review />
        <ContactUs />
      
    </div>
  )
}

export default RegisteredNavabarHomePage
