import React from 'react'

const Footer = () => {
  const date = new Date();
  const currentDate = date.getFullYear();
  return (
    <div className='flexCenter theme_color p-5 text-white relative mt-5'>
      <p>@EAIN - All Rights Reserved {currentDate} </p>
      <span className='absolute right-0 bottom-0 text-[5px] p-2'>Made with love by Yogesh Shrestha</span>
    </div>
  )
}

export default Footer