import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log("Form Submitted!!")
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f8cb31f0-5fbe-4e3e-9cf5-f12bcf24ff65");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
        
      };
      return (
        <>
          {/* <Navbar/>
          <Hero/>
          <About/>
          <Project/> */}
            <h1 className='text-4xl text-center my-5 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Get in Touch</h1>
            <div className='flex flex-col md:flex-row justify-between items-center mt-10 p-4'>
              <div className='w-3/4 md:1/5 '>
                <h1 className='text-3xl font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text'>Lets Talk</h1>
                <h3 className='text-xl font-normal text-slate-800 p-2 hidden sm:block'>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on.You can contact anytime.</h3>
                <p className='text-lg text-slate-600 p-2'><FontAwesomeIcon className='m-1' icon={faEnvelope} beatFade />rahulkumarjha58978@gmail.com</p>
                <p className='text-lg text-slate-600 p-2'><FontAwesomeIcon className='m-1' icon={faPhone} beatFade />+919334417768</p>
                <p className='text-lg text-slate-600 p-2'><FontAwesomeIcon className='m-1' icon={faLocationDot} beatFade />Bangalore,Karnataka</p>
              </div>
              <div className='w-3/5 mt-4'>
            <form onSubmit={onSubmit} class="mt-8 space-y-4">
                  <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div class="grid w-full  items-center gap-1.5 mb-4">
                      <label 
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="first_name"
                      >
                        First Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        name="name"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5 mb-4">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="grid w-full  items-center gap-1.5 mb-4">
                    <label
                      class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="grid w-full  items-center gap-1.5 mb-4">
                    <label
                      class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      name="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div class="grid w-full  items-center gap-1.5 mb-4">
                    <label
                      class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      name="message"
                      placeholder="Leave us a message"
                      cols="3"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    class="w-full rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-6"
                  >
                    Send Message
                  </button>
                </form>
    
            </div>
            </div>
           
        </>
      );
}

export default Contact