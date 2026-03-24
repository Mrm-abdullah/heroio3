import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../../components/SingleApp/SingleApp';

const AllApps = () => {
    const apps = useLoaderData()
    // console.log(apps)
    const [storeApp, setStoreApp] = useState(apps)
    return (
        <div className='bg-gray-100'>
        <div className="card max-w-5xl mx-auto py-4">
            <div className="card-body items-center text-center gap-4">
                <h2 className="card-title text-4xl">Our All Applications</h2>
                <p className='text-gray-500'> Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
        </div>
        <div className='flex justify-between max-w-7xl mx-auto py-4'>
            <div>
            <p className='font-semibold text-xl'>({storeApp.length}) Apps Found</p>
            </div>
            <div>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
                </svg>
                <input type="search" required placeholder="Search Apps" />
            </label>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto pb-16'>
            {
                storeApp.map((app)=> <SingleApp app={app} key={app.id} ></SingleApp>)
            }
        </div>
    </div>
    );
};

export default AllApps;