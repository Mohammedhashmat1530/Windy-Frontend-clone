import React from 'react'

const Component4 = () => {
    return (
        <>
            <div className='bg-gray-100 m-10'>
                <div className='flex justify-between mt-20 p-5 '>
                    <div className='w-1/2 flex  justify-center flex-col  p-56 pl-4 '>
                        <h1 className='text-blue-950 text-4xl font-bold leading-10 tracking-wide '>Open our box of tricks</h1>

                        <p className='mt-10 text-lg tracking-wide '>Windy supports all Tailwind CSS version, from v1 to v3, and will work its magic with custom CSS and frameworks like Bootstrap, Bulma and Foundation.</p>

                    </div>
                    <div className='relative w-1/2 flex  h-auto'>
                        <img className='absolute w-full z-10' src='https://usewindy.com/img/box_frame.svg'></img>
                        <img className='absolute w-full  right-80 top-10' src='https://usewindy.com/img/box_circles.svg'></img>
                        <div className='absolute w-5/6 -z-0 h-96 top-20 left-28 bg-purple-300'>x z</div>
                    </div>
                </div>

                <div className='flex justify-between p-5 gap-2'>
                    <div className='w-1/4 m-2 '>
                        <img src='https://usewindy.com/img/icon_config.svg' width={40}></img>
                        <h4 className='text-lg text-blue-900 font-medium'>Custom config</h4>
                        <p className='text-gray-700 tracking-wide '>Create a custom Tailwind CSS config file to copy your own colors, fonts and other elements you’ve changed.</p>
                    </div>
                    <div className='w-1/4 m-2'>
                        <img src='https://usewindy.com/img/icon_media.svg' width={40}></img>
                        <h4 className='text-lg text-blue-900 font-medium'>Media Query report</h4>
                        <p className='text-gray-700 tracking-wide '>Windy applies Tailwind CSS prefixes to all classes to copy the responsive versions of every site</p>
                    </div>
                    <div className='w-1/4 m-2'>
                        <img src='https://usewindy.com/img/icon_inspect.svg' width={40}></img>
                        <h4 className='text-lg text-blue-900 font-medium'>Inspect Element</h4>
                        <p className='text-gray-700 tracking-wide '>Use Windly straight from the element inspection panel in your browser developers tools.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component4
