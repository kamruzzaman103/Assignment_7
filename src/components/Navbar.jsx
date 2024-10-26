import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import a from '/src/assets/image/logo.png';
import b from '/src/assets/image/gold-coin-with-dollar-sign-it_860932-19947.avif';

const Navbar = ({ coins }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={` w-full backdrop-blur-xl focus:outline-none transition duration-300 ${isScrolled ? 'fixed bg-opacity-75' : 'bg-opacity-100'
      }`}

    >
      <nav
        className={`flex justify-between items-center  bg-white text-black max-w-[1080px] m-auto p-4 " 
        ${isScrolled ? 'bg-opacity-10' : 'bg-opacity-100'
          }`}
      >
        <img className="size-12" src={a} alt="Logo" />
        <div className="flex items-center">
          <div className="navbar-center hidden lg:flex text-[16px]">
            <ul className="menu menu-horizontal px-1 text-gray-500">
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
              <li><a>Schedules</a></li>
            </ul>
          </div>
          <div className="flex items-center border-2 border-solid rounded-lg">
            <div className="menu menu-horizontal p-2">{coins} Coin</div>
            <img
              className="size-6 mr-2"
              src={b}
              alt="Coin"
            />
          </div>
        </div>
        <div className="dropdown lg:hidden">
          <div tabIndex="0" role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-2 -ml-12 w-30 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
          </ul>
        </div>
      </nav>

    </section>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Navbar;
