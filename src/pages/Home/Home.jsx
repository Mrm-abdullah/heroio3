import { Link, useLoaderData } from 'react-router';
import Hero from '../../components/Hero/Hero';
import Trending from '../../components/Trending/Trending';
import { Suspense } from 'react';

const Home = () => {
    const apps = useLoaderData()
    const visibleApps = apps.slice(0, 8);
    // console.log(visibleApps)
    return (
        <div className=' bg-base-200'>
            <Hero></Hero>

            {/* trending */}
            <div className="card max-w-5xl mx-auto py-4">
                <div className="card-body items-center text-center gap-4">
                    <h2 className="card-title text-4xl">Trending Apps</h2>
                    <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
            <Suspense fallback="load hocce">
                <Trending visibleApps={visibleApps}></Trending>
            </Suspense>
            <div className='max-w-7xl mx-auto text-center pt-4 pb-16'>
                <Link to={`/app`} className="btn btn-primary">Show All</Link>
            </div>
        </div>
    );
};

export default Home;