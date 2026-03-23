import React from 'react';
import errorImg from '../../assets/error-404.png'

const PageNotFound = () => {
    return (
        <div className='bg-gray-100 flex justify-center items-center'>
            <div className="card max-w-xl m-24 mx-auto">
                <figure>
                    <img
                    src={errorImg}
                    alt="Shoes" />
                </figure>
                <div className="card-body gap-4">
                    <h2 className="card-title justify-center text-3xl font-bold">Oops, page not found!</h2>
                    <p className='text-center'>The page you are looking for is not available.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;