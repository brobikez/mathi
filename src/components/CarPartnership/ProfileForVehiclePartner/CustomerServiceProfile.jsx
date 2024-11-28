import React from 'react'

const CustomerServiceProfile = ( { profileTitle } ) => {
  return (
    <div>
        <h1 className="text-xl font-semibold">{profileTitle}</h1>
        <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">

            <h2 className='text-xl font-bold p-2 md:p-3'>Helpline Numbers</h2>
                <div className='flex flex-col md:flex-row  p-2 md:p-3'>
                    <h1 className='w-1/5 text-lg font-medium'>General:</h1>
                    <h2 className='text-lg font-medium'>
                    <a href="tel:+112345656789" className=" hover:underline">
                        12345656789
                    </a>
                    </h2> 
               </div>
                <div className='flex flex-col md:flex-row p-2 md:p-3'>
                    <h1 className='w-1/5 text-lg font-medium'>Emergency:</h1>
                    <h2 className=' text-lg font-medium'>
                    <a href="tel:+112345656789" className=" hover:underline">
                        41654416874
                    </a>
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row p-2 md:p-3'>
                    <h1 className='w-1/5 text-lg font-medium'>Support:</h1>
                    <h2 className=' text-lg font-medium'>
                    <a href="tel:+112345656789" className=" hover:underline">
                        12345754419
                    </a>
                    </h2>
                </div>
                
                <h2 className='text-xl font-bold p-2 md:p-3'>Helpline Email Addresses</h2>
                <div className='flex flex-col md:flex-row p-2 md:p-3'>
                    <h1 className='w-1/5 text-lg font-medium'>General:</h1>
                    <h2 className='text-lg font-medium cursor-pointer'>
                    <a href="mailto:info@sevalsoftsoln.com" className=" hover:underline">
                        info@sevalsoftsoln.com
                    </a>
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row p-2 md:p-3'>
                    <h1 className='w-1/5 text-lg font-medium'>Support:</h1>
                    <h2 className=' text-lg font-medium cursor-pointer'>
                        <a href="mailto:info@sevalsoftsoln.com" className=" hover:underline">
                            support@sevalsoftwaresoln.com
                        </a>
                    </h2>
                </div>
                <div className='flex justify-center p-2 m-2 md:mt-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4386.681437763381!2d80.16177111113912!3d12.826006387423837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c1143ea25cccc81%3A0x6e50f93d769b533e!2sSeval%20Software%20Solutions!5e1!3m2!1sen!2sin!4v1730721848134!5m2!1sen!2sin" 
                width="500" 
                height="400" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                className=' border border-gray-500'
                >
                </iframe>
                </div>

        </div>
      
    </div>
  )
}

export default CustomerServiceProfile
