import { type FC } from 'react';
import { Link } from 'react-router-dom';

// My files
import logo from '../assets/Netflix-LOGO.png';

const Navbar: FC = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex flex-col px-5 md:px-10 transition-all duration-300 ease-in-out text-white'>
      <div className='flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='flex gap-x-6 md:gap-x-8 items-center'>
          <Link to='/'>
            <img src={logo} alt='Netflix Logo' className='w-28' />
          </Link>
        </div>

        {/* Navigation */}
        <nav className='text-sm lg:flex space-x-4 '>
          <Link to='/' className='hover:text-gray-300'>
            Home
          </Link>
          <Link to='/' className='hover:text-gray-300'>
            TV Shows
          </Link>
          <Link to='/' className='hover:text-gray-300'>
            Movies
          </Link>
          <Link to='/' className='hover:text-gray-300'>
            New & Popular
          </Link>
          <Link to='/myList' className='hover:text-gray-300'>
            My List
          </Link>
          <Link to='/' className='hover:text-gray-300'>
            Browse By Language
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
