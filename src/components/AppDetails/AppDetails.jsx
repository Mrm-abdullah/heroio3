import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addAppToLocalStorage, getAppFromLocalStorage } from '../../utility/storage';
import {toast } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    // console.log('okkkk', data)
    const singleApp = data?.find(app => parseInt(app.id) === parseInt(id))
    // console.log(singleApp)
    const installApp = getAppFromLocalStorage()
    // console.log(installApp)
    const [install, setInstall] = useState(installApp || [])
    const a = install.find(a => parseInt(a) === parseInt(id))
    console.log(install)


    const handleInstallApp = (id) => {
        addAppToLocalStorage(id)
        const store = [...install, id]
        setInstall(store)
        toast("App installed")
    }
    return (
        <div className='bg-gray-100'>
            <div className='max-w-7xl mx-auto pb-8'>
                <div className='flex gap-12 py-12'>
                    <div className='w-90 bg-base-100 flex-1'>
                        <img src={singleApp.image} alt="" srcSet="" />
                    </div>
                    <div className='flex-2'>
                        <h2 className='text-3xl font-bold'> {singleApp.title} </h2>
                        <p className='text-gray-500 py-4'>Developed by <span className='text-primary '>productive.io</span></p>

                        <div className='divider'></div>
                        <div className='flex gap-12 pt-4'>
                            <div className=''>
                                <i className="fa-solid fa-download text-4xl text-success"></i>
                                <p className='py-1'>Downloads</p>
                                <h3 className='text-4xl font-bold'>{singleApp.downloads}</h3>
                            </div>
                            <div>
                                <i className="fa-solid fa-star  text-4xl text-[#FF8811]"></i>
                                <p className='py-1'>Average Ratings</p>
                                <h3 className='text-4xl font-bold'>{singleApp.ratingAvg}</h3>
                            </div>
                            <div>
                                <i className="fa-regular fa-thumbs-up text-4xl text-primary"></i>
                                <p className='py-1'>Total Reviews</p>
                                <h3 className='text-4xl font-bold'>{singleApp.reviews}K</h3>
                            </div>
                        </div>
                        {
                            a ? <button disabled className='btn btn-success mt-12'>Installed</button> : <button onClick={() => handleInstallApp(id)} className='btn btn-success mt-12'>Install Now ({singleApp.size} MB)</button>
                        }
                    </div>
                </div>
                <div className='divider'></div> 
                <div>
                    <h3 className='text-2xl font-bold'>Ratings</h3>
                </div>
                <div>
                    rating hear
                </div>
                <div className='divider'></div> 
                <div>
                    <h3 className='text-2xl font-bold'>Description</h3>
                </div>
                <p className='py-2 text-xl '>
                    {singleApp.description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;