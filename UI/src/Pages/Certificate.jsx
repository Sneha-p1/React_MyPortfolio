import React from 'react'
import Certificates from './Certificates'


const Certificate = () => {
  return (
      <>
    <section className="py-20 px-10 bg-white dark:bg-black text-black dark:text-white">
        <h2 id="projects" className="text-4xl font-bold text-center text-orange-500 dark:text-orange-400 mb-10">Certificate</h2>
        <div className='flex'> 
             <Certificates/>   
        </div>
    </section>
      </>
  )
}

export default Certificate