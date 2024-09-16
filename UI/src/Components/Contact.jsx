import React from 'react'

const Contact = () => {
  return (
      <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
      <h2 className="text-4xl font-bold text-center text-orange-500 dark:text-orange-400 mb-10">Contact</h2>
      <div className="flex flex-col md:flex-row bg-amber-200 dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-12">
        <div className="md:w-1/2 md:mr-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Subject</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" placeholder="Subject" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded dark:bg-blue-600">Send Message</button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact details</h2>
          <ul className="text-gray-700 dark:text-gray-300">
            {/* <li className="flex items-center mb-2">
              <span className="mr-2">📍</span>
              Your Address, Your City, Your Country
            </li> */}
            <li className="flex items-center mb-2">
              <span className="mr-2">✉️</span>
            <a href='snehaparambadan@gmail.com'>  snehaparambadan@gmail.com</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              9746990966
            </li>
          </ul>
        </div>
      </div>
    </div>
      </>
  )
}

export default Contact