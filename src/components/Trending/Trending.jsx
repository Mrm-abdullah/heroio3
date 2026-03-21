import React from 'react';

const Trending = () => {
    return (
        <>
            <div className="card max-w-5xl mx-auto py-4">
                <div className="card-body items-center text-center gap-4">
                    <h2 className="card-title text-4xl">Trending Apps</h2>
                    <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                <div className="card bg-white">
                    <figure className="px-4 pt-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i class="fa-solid fa-download"></i> 9M</span>
                            <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i class="fa-solid fa-star"></i> 5</span>
                        </div>
                    </div>
                </div>
                <div className="card bg-white">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ml-4">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <p className='p-1 bg-base-100'><i class="fa-solid fa-download"></i> 9M</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ml-4">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <p className='p-1 bg-base-100'><i class="fa-solid fa-download"></i> 9M</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ml-4">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <p className='p-1 bg-base-100'><i class="fa-solid fa-download"></i> 9M</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto text-center py-4'>
                <button className="btn btn-primary">Show All</button>
            </div>
        </>
    );
};

export default Trending;