import React from 'react';

const SingleApp = ({app}) => {
    return (
        <div>
            <div className="card shadow bg-white">
                <figure className="px-4 pt-4">
                    <img src={app.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{app.title}</h2>
                    <div className="flex w-full justify-between">
                        <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i className="fa-solid fa-download"></i> {app.downloads}M</span>
                        <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i className="fa-solid fa-star"></i> {app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleApp;