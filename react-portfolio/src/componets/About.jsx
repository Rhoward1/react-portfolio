import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div iv className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000] w-full grid grid-col-2 gap-8'>

                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000] w-full grid grid-col-2 gap-8'>
                    <div>
                        <p>Hi I'm Ryan, nice to meet you. Please take a look around.</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default About