import React, { useState } from 'react';
import { getAppFromLocalStorage, removeAppFromLocalStorage } from '../../utility/storage';
import InstallList from '../../components/InstallList/InstallList';
import { useLoaderData } from 'react-router';
import {toast } from 'react-toastify';

const Installation = () => {
    const data = useLoaderData()
    // console.log(data)
    const installList = getAppFromLocalStorage()
    const selectedApps = data.filter(app => installList.includes(String(app.id)))
    const [installAppList, setInstallAppList] = useState([...selectedApps])

    // console.log(selectedApps)
    const handleUninstallApp = (id) => {
        // console.log(id)
        const newInstallAppList = installAppList.filter(app => parseInt(app.id) !== id)
        removeAppFromLocalStorage(id)
        setInstallAppList(newInstallAppList)
        // console.log(newInstallAppList)
        toast('Uninstall Successful')
    }
    const sortHighToLow = () => {
        const sorted = [...installAppList].sort((a, b) => b.downloads - a.downloads);
        setInstallAppList(sorted);
        // console.log(sorted)
    };
    const sortLowToHigh = () => {
        const sorted = [...installAppList].sort((a, b) => a.downloads - b.downloads);
        setInstallAppList(sorted);
        // console.log(sorted) 
    };
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
                    <p className='font-semibold text-xl'> {selectedApps.length} Apps Found</p>
                </div>
                <div>
                    <details className="dropdown">
                    <summary className="btn m-1">Sort By Size <i className="fa-solid fa-sort-down text-xl -mt-2"></i></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => sortHighToLow()}><a>High-Low</a></li>
                        <li onClick={() => sortLowToHigh()}><a>Low-High</a></li>
                    </ul>
                    </details>
                </div>
            </div>
            <div className='max-w-7xl mx-auto pb-16'>
                <ul className="list rounded-box shadow-md">

                    {
                        installAppList.map((app) => <InstallList app={app} key={app.id} handleUninstallApp={handleUninstallApp}></InstallList>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Installation;