
import logo from '../../../assets/Media/logo dark.png';
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    const links = <>
        <li><a className=' text-[16px] text-[#020043] font-medium'>Home</a></li>
        <li><a className=' text-[16px] text-[#020043] font-medium'>Services</a></li>
        <li><a className=' text-[16px] text-[#020043] font-medium'>Blog</a></li>
        <li><a className=' text-[16px] text-[#020043] font-medium'>About Us</a></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-[16px] text-[#020043] dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
               <button className='flex items-center btn bg-transparent border-2 text-[16px] border-[#020043] text-[#020043]'>Appointment <GoArrowUpRight className='text-xl'></GoArrowUpRight></button>
            </div>
        </div>
    );
};

export default Navbar;