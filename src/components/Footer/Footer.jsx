import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
      <footer className='bg-neutral '>
        <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 max-w-7xl mx-auto">
          <aside className='max-w-sm'>
           <Link to={`/`} className='text-2xl flex gap-2'> <img src={logo} className='w-8' alt="" srcSet="" /> <span>Hero Apps</span> </Link>
            <p className='mt-2'>
              Hero Apps is a simple platform where users can discover, explore, and easily install their favorite apps in one place.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    );
};

export default Footer;