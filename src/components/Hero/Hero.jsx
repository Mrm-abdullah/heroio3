import React from 'react';
import hero from '../../assets/hero.png'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <>
            <div className="hero bg-base-200 py-12">
                <div className="hero-content text-center max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-7xl font-bold">We Build <br /> <span className='text-primary'>Productive</span> Apps</h1>
                        <p className="py-6">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact
                        </p>
                        <div className=''>
                            <Link to={`https://play.google.com/store/apps?hl=en`} target='_blank' className="btn btn-wide mr-8 text-2xl p-6"> <i className="fa-brands fa-google-play"></i> Google Play</Link>
                            <Link to={`https://www.apple.com/app-store/`} target='_blank' className="btn btn-wide text-2xl p-6"> <i className="fa-brands fa-app-store"></i> App Store</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero max-w-7xl mx-auto'>
                <img src={hero} alt="" srcSet="" />
            </div>
            <div className='bg-primary'>
                <div className="card bg-primary text-primary-content max-w-7xl mx-auto py-12">
                    <div className="card-body max-w-5xl mx-auto gap-8">
                        <h2 className="card-title justify-center text-5xl">Trusted by Millions, Built for You</h2>
                        <div className="card-actions justify-between">
                            <div className='flex flex-col items-center gap-5'>
                                <p>Total Downloads</p>
                                <h3 className='text-5xl font-bold'>29.6M</h3>
                                <p>21% more than last month</p>
                            </div>
                            <div className='flex flex-col items-center gap-5'>
                                <p>Total Reviews</p>
                                <h3 className='text-5xl font-bold'>906K</h3>
                                <p>46% more than last month</p>
                            </div>
                            <div className='flex flex-col items-center gap-5'>
                                <p>Active Apps</p>
                                <h3 className='text-5xl font-bold'>132+</h3>
                                <p>31 more will Launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;