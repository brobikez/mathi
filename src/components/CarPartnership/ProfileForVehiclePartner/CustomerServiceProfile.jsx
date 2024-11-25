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

        </div>
      
    </div>
  )
}

export default CustomerServiceProfile
