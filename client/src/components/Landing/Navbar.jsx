import React from "react";
import { Link, NavLink } from "react-router-dom";
import profil from "../../assets/profile.jpg";
import { useState } from "react";
import { IoList } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary" : "hover:text-primary transition-colors";

  return (
    <header className="relative flex items-center justify-between z-50">
      <Link to={"/"} className="flex items-center gap-2">
        <img
          src={profil}
          alt=""
          className="w-10 lg:w-15 h-10 lg:h-15 rounded-full"
        />
        <div className="pl-2 border-l-2 font-medium text-sm lg:text-base">
          <h1>Mohammed El Amin Harroudj</h1>
          <h1 className="text-secondary">Web Developer</h1>
        </div>
      </Link>
      <nav className="hidden lg:flex items-center gap-8 font-medium">
        <NavLink to={"/"} className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={navLinkClass}>
          About Me
        </NavLink>
        <NavLink to={"/works"} className={navLinkClass}>
          My Works
        </NavLink>
        <NavLink to={"/contact"} className={navLinkClass}>
          Contact Me
        </NavLink>
      </nav>
      <button onClick={toggleMenu} className="lg:hidden">
        {isMenuOpen ? (
          <IoIosCloseCircleOutline size={30} />
        ) : (
          <IoList size={30} />
        )}
      </button>
      <div
        className={`absolute top-full right-0 bg-background2 rounded-3xl mt-4 w-full max-w-sm mx-auto transform transition-all duration-300 ease-in-out p-6 ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="lg:hidden flex flex-col items-center gap-4 font-medium">
        <NavLink to={"/"} className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={navLinkClass}>
          About Me
        </NavLink>
        <NavLink to={"/works"} className={navLinkClass}>
          My Works
        </NavLink>
        <NavLink to={"/contact"} className={navLinkClass}>
          Contact Me
        </NavLink>
      </nav>
      </div>
    </header>
  );
}

export default Navbar;
