import React from 'react';
import banner from "./assets/banner.png"

const Baner = () => {
    return (
        <div className="flex justify-between container mx-auto items-center mt-10 mb-6">
            <div>
                <p className='text-4xl font-extrabold'>Build Your Ideal </p>
                <h1 className='bg-gradient-to-r from-orange-500 via-pink-500  to-purple-600 bg-clip-text text-transparent text-4xl font-extrabold'>Development Stack</h1>
                <p>Explore forntend, backend, database, and tooling option, compare them side by side, and put together the stack that fits your next project</p>

                <div className="flex  gap-8 mt-8">
                        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium px-6 py-2.5 rounded-2xl hover:bg-pink-800 transition-color duration-200 shadow-sm hover:shadow-md">Explore Tecnologies</button>
                        <button className="  bg-white font-medium px-6 py-2.5 rounded-2xl hover:bg-pink-800 transition-color duration-200 shadow-sm hover:shadow-md">Learn more</button>
                </div>
            </div>
             <div>
                <img src={banner} alt='bannerimage'></img>
            </div>
            
        </div>
    );
};

export default Baner;