import React from 'react';
import { VscArrowSmallRight } from 'react-icons/vsc';

const Form = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  py-20 items-center bg-slate-100'>
            <div className='py-10 ps-10'>
                <h1 className='text-3xl font-semibold'>Assisting you in securing a competitive advantage</h1>
                <p className='py-4'>Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu. Consectetur cras vitae orci</p>
                <button className='bg-green-400 px-4 rounded-xl'><VscArrowSmallRight className='h-10 w-10'></VscArrowSmallRight></button>
            </div>


            <form className="max-w-md mx-auto py-10 bg-white rounded-lg p-4 m-2">
                <h1 className='text-3xl font-bold'>Feel free to get in touch with us!</h1>
                <p className='py-5'>Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu.</p>
                <div className="mb-5">
                    <label  className="block mb-2  font-bold text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Name" required />
                </div>
                
                <div className="mb-5">
                    <label  className="block mb-2  font-bold text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Email" required />
                </div>
                
                <div className="mb-5">
                    <label  className="block mb-2  font-bold text-gray-900 dark:text-white">Subject</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your message Subject" required />
                </div>
                
               
                <button type="submit" className="text-white bg-black rounded-md px-4 py-2">Send</button>
            </form>

        </div>
    
    );
};

export default Form;