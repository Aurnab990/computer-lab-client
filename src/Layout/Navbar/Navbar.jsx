import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'
import { AuthContext } from '../../AuthProvider/Authprovider';

const Navbar = () => {
    const{user} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    return (
        <div class="bg-zinc-500 sticky top-0 z-50 bg-fixed">
      <div class="px-4 py-6 mx-auto lg:py-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="flex items-center justify-between lg:justify-center lg:space-x-16">
          <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
          <NavLink
            to="/"
            exact
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            activeClassName="underline" // Add your underline styling class here
          >
            HOME
          </NavLink>
        </li>
            
            <li>
              <a>
                <Link
                to={"/course"}
                title='Courses'
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                COURSES</Link>
              </a>
            </li>
          </ul>
          <ul class="flex  hidden space-x-8 lg:flex">
            
             <li>
              <a>
                <Link
                to={"/faculties"}
                
                title="Faculty"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                FACULTY
                
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link
                to={"/activity"}
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                ACTIVITY
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link
                to={"/gallery"}
                title='Gallery'
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                GALLERY
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link
                to={"/achivements"}
                href="/"
                aria-label="Sign up"
                title="Achivements"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                ACHIVEMENTS
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link
                to={"/placements"}
                aria-label="Placements"
                title="Placements"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                PLACEMENTS
                


                </Link>

              </a>
            </li>
            {
              user?
              <li>
              <a>
                <Link
                to={"/dashboard"}
                aria-label="dashboard"
                title="dashboard"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                DASHBOARD
                


                </Link>

              </a>
            </li>
              :
              <li>
              <a>
                <Link
                to={"/login"}
                aria-label="dashboard"
                title="dashboard"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                LOGIN
                


                </Link>

              </a>
            </li>
            }
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          HOME
                        </a>
                      </li>
                      <li>
                      <a>
                <Link
                to={"/course"}
                title='Courses'
                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                COURSES</Link>
              </a>
                      </li>
                      <li>
                      <a>
                <Link
                to={"/faculties"}
                
                title="Faculty"
                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                FACULTY
                
                </Link>
              </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          ACTIVITIES
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Sign in"
                          title="Sign in"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          GALLERY
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                         ACHIVEMENTS
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                         PLACEMENTS
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                         CONTACT US
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;