import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Project(){
    return (
        <>
            <div className='p-4 my-8'>
        <h1 className='text-4xl text-center my-5 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>My Projects</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 mt-8'>
          <div className='border-2 border-green-950'>
            <h4 className='text-xl p-1 bg-brown text-left'>01</h4>
            <div className='flex flex-col justify-center align-center'>
              <h2 className='my-2 text-center text-2xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Book Management</h2>
              <p className='text-xl text-center font-normal'>Building By Using Mern Stack</p>
              <button className='font-medium my-2 border-2 border-slate-900 rounded m-3'>See More <FontAwesomeIcon icon={faArrowRight} bounce /></button>
            </div>
          </div>
          <div className='border-2 border-green-950'>
            <h4 className='text-xl p-1 bg-brown text-left'>02</h4>
            <div className='flex flex-col justify-center align-center'>
              <h2 className='my-2 text-center text-2xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Portfolio</h2>
              <p className='text-xl text-center font-normal'>Portfolio using react and Tailwind</p>
              <button className='font-medium my-2 border-2 border-slate-900 rounded m-3'>See More <FontAwesomeIcon icon={faArrowRight} bounce /></button>
            </div>
          </div>
          <div className='border-2 border-green-950'>
            <h4 className='text-xl p-1 bg-brown text-left'>03</h4>
            <div className='flex flex-col justify-center align-center'>
              <h2 className='my-2 text-center text-2xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Image Generator</h2>
              <p className='text-xl text-center font-normal'>Build Using html,css and Js</p>
              <button className='font-medium my-2 border-2 border-slate-900 rounded m-3'>See More <FontAwesomeIcon icon={faArrowRight} bounce /></button>
            </div>
          </div>
          <div className='border-2 border-green-950'>
            <h4 className='text-xl p-1 bg-brown text-left'>04</h4>
            <div className='flex flex-col justify-center align-center'>
              <h2 className='my-2 text-center text-2xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>News App</h2>
              <p className='text-xl text-center font-normal'>Building by Using Js</p>
              <button className='font-medium my-2 border-2 border-slate-900 rounded m-3'>See More <FontAwesomeIcon icon={faArrowRight} bounce /></button>
            </div>
          </div>
          <div className='border-2 border-green-950'>
            <h4 className='text-xl p-1 bg-brown text-left'>05</h4>
            <div className='flex flex-col justify-center align-center'>
              <h2 className='my-2 text-center text-2xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Blog App</h2>
              <p className='text-xl text-center font-normal'>Using react,Jwt Authentication</p>
              <button className='font-medium my-2 border-2 border-slate-900 rounded m-3'>See More <FontAwesomeIcon icon={faArrowRight} bounce /></button>
            </div>
          </div>
          <div className='border-2 border-green-950'>
            <h4 className='text-xl p-1 bg-brown text-left'>06</h4>
            <div className='flex flex-col justify-center align-center'>
              <h2 className='my-2 text-center text-2xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Service Website</h2>
              <p className='text-xl text-center font-normal'>Building By Using Mern Stack</p>
              <button className='font-medium my-2 border-2 border-slate-900 rounded m-3'>See More <FontAwesomeIcon icon={faArrowRight} bounce /></button>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default Project