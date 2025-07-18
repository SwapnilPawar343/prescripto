import React from 'react'
import { assets } from '../assets/asset'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
       <img className='mb-5 w-40' src={assets.logo} alt="" />
       <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum ut, quasi voluptate a nihil aliquam! Ducimus ipsam unde dolor, </p>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact </li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>9022975787</li>
            <li>sp171021@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* copywrite--*/}
        <hr />
        <p className='py-5 text-center'>Copyright-2024 @ prescripto -All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
