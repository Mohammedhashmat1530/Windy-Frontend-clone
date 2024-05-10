import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center  border-gray-200 p-5 pt-0'>
      <div>
        <img src='https://usewindy.com/img/card.png' width={190}></img>
      </div>
      <div>
        <h4 className='text-blue-600 text-md font-medium font-mono'>A Product by <span className='text-violet-600'>Beyond Code</span></h4>
      </div>
      <div className='flex justify-between gap-10 pr-10' >
        <h3 className='leading-5 font-sans font-semibold'>Getting Started</h3>
        <h3 className='leading-5 font-sans font-semibold'>Policy</h3>
      </div>
    </div>
  )
}

export default Header
