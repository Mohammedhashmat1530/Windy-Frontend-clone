import React from 'react'

const Component1 = () => {
    return (<>
        <div className='flex   justify-between p-5 w-full bg-gradient-to-b from-white via-blue-100 to-pink-100 to-85%'>
            <div className=' w-1/2 flex   justify-center flex-col gap-3'>
                <h2 className='text-3xl font-bold leading-10 text-blue-900 tracking-wide pl-4'>Copy elements from any</h2>
                <h2 className='text-3xl font-bold leading-10 text-blue-900 tracking-wide pl-4'>website as a Tailwind CSS</h2>
                <h2 className='text-3xl font-bold leading-10 text-blue-900 tracking-wide pl-4'>component</h2>
                <p className='pl-4 text-lg font-light text-gray-700'>Speed up your workflow with Windy and save hours or even days when converting existing styles to Tailwind CSS</p>
                <div className='pl-4 mt-4'>
                    <button className='bg-blue-500 p-3 rounded-md hover:bg-blue-400 text-md font-semibold text-white'> Buy Windy</button>
                    <button className='ml-3 rounded-md p-3 text-md font-semibold bg-gray-100'> Try Windy on this site</button>
                </div>
            </div>
            <div className='relative left-5 bottom-0 right-0  flex items-center justify-center'>
                <img src='https://usewindy.com/img/hero_frame.svg'></img>
            </div>

        </div>
    </>
    )
}

export default Component1
