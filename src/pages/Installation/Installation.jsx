import React from 'react';

const Installation = () => {
    return (
        <div className='bg-gray-100'>
            <div className="card max-w-5xl mx-auto py-4">
                <div className="card-body items-center text-center gap-4">
                    <h2 className="card-title text-4xl">Your Installed Apps</h2>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            </div>
            <div className='flex justify-between max-w-7xl mx-auto py-4'>
                <div>
                    <p className='font-semibold text-xl'>1 Apps Found</p>
                </div>
                <div>
                    <details className="dropdown">
                    <summary className="btn m-1">Sort By Size <i class="fa-solid fa-sort-down text-xl -mt-2"></i></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Low to High</a></li>
                        <li><a>High to Low</a></li>
                    </ul>
                    </details>
                </div>
            </div>
            <div className='max-w-7xl mx-auto pb-16'>
                <ul className="list rounded-box shadow-md">
  
                                        
                    <li className="list-row bg-base-100 my-1">
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                        <div>
                            <div>Forest: Focus for Productivity</div>
                            <div className="text-xs uppercase font-semibold opacity-60 pt-2">
                                <span className='rounded-xl text-green-500 mr-2'><i class="fa-solid fa-download"></i> 9M</span>
                                <span className='text-[#FF8811] rounded-xl mr-2'><i class="fa-solid fa-star"></i> 5</span>
                                <span>258 MB</span>
                            </div>
                        </div>
                        <button className="btn btn-success">Uninstall
                        </button>
                    </li>
                    <li className="list-row bg-base-100 my-1">
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                        <div>
                            <div>Forest: Focus for Productivity</div>
                            <div className="text-xs uppercase font-semibold opacity-60 pt-2">
                                <span className='rounded-xl text-green-500 mr-2'><i class="fa-solid fa-download"></i> 9M</span>
                                <span className='text-[#FF8811] rounded-xl mr-2'><i class="fa-solid fa-star"></i> 5</span>
                                <span>258 MB</span>
                            </div>
                        </div>
                        <button className="btn btn-success">Uninstall
                        </button>
                    </li>
                    <li className="list-row bg-base-100 my-1">
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                        <div>
                            <div>Forest: Focus for Productivity</div>
                            <div className="text-xs uppercase font-semibold opacity-60 pt-2">
                                <span className='rounded-xl text-green-500 mr-2'><i class="fa-solid fa-download"></i> 9M</span>
                                <span className='text-[#FF8811] rounded-xl mr-2'><i class="fa-solid fa-star"></i> 5</span>
                                <span>258 MB</span>
                            </div>
                        </div>
                        <button className="btn btn-success">Uninstall
                        </button>
                    </li>
                    <li className="list-row bg-base-100 my-1">
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                        <div>
                            <div>Forest: Focus for Productivity</div>
                            <div className="text-xs uppercase font-semibold opacity-60 pt-2">
                                <span className='rounded-xl text-green-500 mr-2'><i class="fa-solid fa-download"></i> 9M</span>
                                <span className='text-[#FF8811] rounded-xl mr-2'><i class="fa-solid fa-star"></i> 5</span>
                                <span>258 MB</span>
                            </div>
                        </div>
                        <button className="btn btn-success">Uninstall
                        </button>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    );
};

export default Installation;