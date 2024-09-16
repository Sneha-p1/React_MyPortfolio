import React from 'react'

const Footer = () => {
  return (
      <>
    <footer className="text-center py-4 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto">
        
        <p className="text-gray-600 dark:text-gray-400">
          ©  2024 React & Tailwind CSS Portfolio. Made by{' '}
          <a
            href="https://www.linkedin.com/in/sneha-parambadan-b1aaa5215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-orange-500 dark:text-orange-400"
          >
            Sneha P
          </a>
        </p>
      </div>
    </footer>

      </>
  )
}

export default Footer