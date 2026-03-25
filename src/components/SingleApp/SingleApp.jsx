import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    return (
        <Link to={`/appDetails/${app.id}`}>
            <div className="card shadow bg-white">
                <figure className="px-4 pt-4">
                    <img src={app.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{app.title}</h2>
                    <div className="flex w-full justify-between">
                        <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i className="fa-solid fa-download"></i> {app.downloads}</span>
                        <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i className="fa-solid fa-star"></i> {app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleApp;