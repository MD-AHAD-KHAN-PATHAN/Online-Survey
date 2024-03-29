import Link from "next/link";
// import logo from "../Asset/logo.png"
import Image from "next/image";


const Navbar = () => {

  const navlinks = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">Quiz and poll</Link></li>
    <li><Link href="/about">About us</Link></li>

  </>

  return (
    <div className="border-b-inherit border-2 pb-3">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl"><Image alt="" width={288} height={72} className="h-18 w-72" src="https://i.ibb.co/G7tQj4K/logo.png"></Image></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Join Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;