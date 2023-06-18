import React from 'react'
import Link from 'next/link' 
const Footer = ({logout,user}) => {
  return (
   
<footer
className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
<div
  className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
  <div className="mr-12 hidden lg:block">
    <span>Get connected with us on social networks:</span>
  </div>
 
  <div className="flex justify-center">
   <a href="mailto:akashnirwan26@gmail.com?subject='My Query'">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="mr-3 h-5 w-5">
  <path
    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path
    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>
</a> 
    <a href="https://www.instagram.com/akash_nirwan26/" className="mr-6 text-neutral-600 dark:text-neutral-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hover:bg-pink-400"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>
 
  </div>
</div>

 
<div className="mx-6 py-10 text-center md:text-left">
  <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
     
    <div className="">
      <h6
        className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-4 w-4">
          <path
            d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
        Theme Codes
      </h6>
      <p>
        The right place to buy affordable and classy Flower theme products available 
      </p>
    </div>
     
    <div className="">
      <h6
        className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Products
      </h6>
      <p className="mb-4">
        <Link href="tshirts" className="text-neutral-600 dark:text-neutral-200"
          >T-shirts</Link
        >
      </p>
      <p className="mb-4">
        <Link href="shirts" className="text-neutral-600 dark:text-neutral-200"
          >Shirts</Link
        >
      </p>
      <p className="mb-4">
        <Link href="pants" className="text-neutral-600 dark:text-neutral-200"
          >Pants</Link
        >
      </p>
      
    </div>
     
    <div className="">
      <h6
        className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Useful links
      </h6>
       
       
      
     {user.value? <p>
      <button>
      <a onClick={logout} className="text-neutral-600 dark:text-neutral-200">Sign out</a>
      </button> 
      </p>:
      <p>
      <button>
      <Link href="/login" className="text-neutral-600 dark:text-neutral-200">Sign In</Link>
      </button> 
      </p>
    }
    </div>
     
    <div>
      <h6
        className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Contact
      </h6>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path
            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
       India, New-Delhi,110028
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path
            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        akashnirwan26@gmail.com
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd" />
        </svg>
        + 8447276004
      </p>
      
    </div>
  </div>
</div>

 
<div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
  <span>© 2023 Copyright:</span>
   Theme Cloths  
</div>
</footer>
  )
}

export default Footer