import React from 'react'
import { links } from '../../data/navbar_links'
import logo from "../..//logo.png";
import { Link, useLocation, matchPath } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from "../Homepage/Cart";

const Navbar = () => {

  const {token} = useSelector((state) => state.auth);
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  return (
    <div className='bg-richblue-400 border-b-richblue-500 border-b-2 text-[15px] font-medium'>
      <nav className='w-11/12 mx-auto h-16 flex justify-between items-center'>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" width={85} height={85} />
          </Link>
        </div>
        <div className='flex gap-7'>
          {
            links.map((link,index) => (
              <li className='list-none' key={index}>
                {
                  link.title === "Categories" ? (
                    <div>

                    </div>
                  ) :
                    (<div>

                      <Link to={link?.path}>
                      
                        <p
                          className={`${matchRoute(link?.path)
                            ? "text-white"
                            : "text-yellow-50"
                            }`}
                        >
                          {link.title}
                        </p>
                      </Link>

                    </div>)
                }
              </li>
            ))
          }
        </div>




        {/* Login signup dashboard */}
        <div className='hidden items-center gap-x-4 md:flex'>
        {
          token === null && (
            <Link to={"/login"}>
              <button>
                LogIn
              </button>
            </Link>
          )
        }
        {
          token === null && (
            <Link to={"/signup"}>
                <button>
                  SignUp
                </button>
            </Link>
          )
        }
        {
          token !== null && <Cart/>
        }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
