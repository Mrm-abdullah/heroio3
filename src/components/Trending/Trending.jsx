import React from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Trending = ({visibleApps}) => {
    console.log(visibleApps)
    return (
        <>
            
            <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                {
                    visibleApps.map((app)=> <SingleApp app={app} key={app.id} ></SingleApp>)
                }
            </div>
            
        </>
    );
};

export default Trending;