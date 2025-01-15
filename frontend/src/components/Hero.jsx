import React from 'react'
function Hero(){

    return (
        <>
            <div className='flex justify-center items-center flex-col'>
            <img className='w-1/3' src="https://img.freepik.com/premium-vector/little-boy-smiling-waving-hand-little-boy-portrait-circular-shape_254685-1100.jpg" alt="" />
            <h1 className='font-bold text-5xl p-3'><span className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>I'm Rahul Kumar,</span>full Stack Developer from India.</h1>
            <p className='text-black text-2xl p-2'>I am Frontend Developer from bangalore,having 5 years of experience in multiple companies like Microsoft,Apple,Tesla</p>
            <div className='flex justify-evenly items-center mt-4'>
              <button className='bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl border-slate-950'>Connect With Me</button>
              <button className='text-sm p-3 text-black border-2 border-slate-950 mx-2 rounded'>My resume</button>
            </div>
            </div>

        </>
    )

}

export default Hero