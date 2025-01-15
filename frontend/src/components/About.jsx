import React from 'react'

function About(){
    return (
        <>
              <h1 className='text-4xl font-bold text-center my-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>About Me</h1>
      <div className='flex justify-around items-center'>
        <img className='w-1/3 sm:block hidden' src="https://previews.123rf.com/images/amahce/amahce2110/amahce211000052/175594584-little-boy-smiling-and-waving-hand-little-boy-portrait-in-circular-shape-elementary-school-student.jpg" alt="" />
        <div>
            <p className='text-xl font-normal text-slate-900 mb-4'>I am experienced full Stack Developer with over a decade of professional expertise in the field.
              Throughout my carrer ,I have had the priviledge of collaborating with prestigious orgranisations,contributing to the growth and success.
            </p>
            <p className='text-xl font-normal text-slate-900 mb-4' >My passion for full Stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project</p>
            <div className='p-1'>
              <div className='my-2 flex flex-col md:flex-row'>
                <p className='text-xl font-medium text-slate-900 w-1/5'>HTML/CSS</p>
                  <div className='bg-blue-400 rounded-full h-3 w-3/4 mt-2 ml-2'>
                      <div className='bg-blue-800 rounded-full h-3 w-3/4'></div>
                  </div>
              </div>
              <div className='my-2 flex flex-col md:flex-row'>
                <p className='text-xl font-medium text-slate-900 w-1/5'>React</p>
                  <div className='bg-blue-400 rounded-full h-3 w-3/4 mt-2 ml-2'>
                      <div className='bg-blue-800 rounded-full h-3 w-1/2'></div>
                  </div>
              </div>
              <div className='my-2 flex flex-col md:flex-row'>
                <p className='text-xl font-medium text-slate-900 w-1/5'>Javascript</p>
                  <div className='bg-blue-400 rounded-full h-3 w-3/4 mt-2 ml-2'>
                      <div className='bg-blue-800 rounded-full h-3 w-3/4'></div>
                  </div>
              </div>
              <div className='my-2 flex flex-col md:flex-row'>
                <p className='text-xl font-medium text-slate-900 w-1/5'>NodeJS</p>
                  <div className='bg-blue-400 rounded-full h-3 w-3/4 mt-2 ml-2'>
                      <div className='bg-blue-800 rounded-full h-3 w-1/2'></div>
                  </div>
              </div>
              <div className='my-2 flex flex-col md:flex-row'>
                <p className='text-xl font-medium text-slate-900 w-1/5'>Mongodb</p>
                  <div className='bg-blue-400 rounded-full h-3 w-3/4 mt-2 ml-2'>
                      <div className='bg-blue-800 rounded-full h-3 w-1/5'></div>
                  </div>
              </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default About