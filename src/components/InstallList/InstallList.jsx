import React from 'react';

const InstallList = ({app, handleUninstallApp}) => {
    return (
        <>
            <li className="list-row bg-base-100 my-1">
                <div><img className="size-10 rounded-box" src={app.image}/></div>
                <div>
                    <div>Forest: Focus for Productivity</div>
                    <div className="text-xs uppercase font-semibold opacity-60 pt-2">
                        <span className='rounded-xl text-green-500 mr-2'><i className="fa-solid fa-download"></i> 9M</span>
                        <span className='text-[#FF8811] rounded-xl mr-2'><i className="fa-solid fa-star"></i> 5</span>
                        <span>258 MB</span>
                    </div>
                </div>
                <button onClick={() => handleUninstallApp(app.id)} className="btn btn-success">Uninstall
                </button>
            </li>
        </>
    );
};

export default InstallList;