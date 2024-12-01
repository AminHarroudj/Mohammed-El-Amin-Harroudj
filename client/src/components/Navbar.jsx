import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="flex justify-between items-center mx-4 lg:mx-16 fixed right-0 left-0 top-6 border-2 border-[#2EB2D3] rounded-full py-2 px-6 lg:px-16 bg-[#2EB2D3] bg-opacity-20 backdrop-blur-md z-50">
        <div className="text-3xl font-bold">AMIN</div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } lg:flex justify-start gap-6 lg:gap-16 text-white max-lg:absolute max-lg:flex-col max-lg:top-[-26px] max-lg:right-[-17px] max-lg:left-36 max-lg:border-[#2EB2D3] max-lg:border-2 max-lg:h-screen max-lg:bg-[#10131A] max-lg:pt-8`}
        >
          <IoIosClose
            className="text-3xl absolute top-3 left-3 lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <Link to={"/"}>
            <div className="text-3xl font-bold lg:hidden flex items-center justify-center">
              <h1>AMIN</h1>
            </div>
          </Link>
          <ul className="flex flex-col lg:flex-row lg:gap-16 items-end text-end">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-white ${
                  isActive(link.to)
                    ? "text-opacity-100 max-lg:border-[#2EB2D3] max-lg:border-t-2 max-lg:border-b-2 max-lg:py-4 max-lg:px-10 max-lg:bg-[#2EB2D3] max-lg:bg-opacity-20 max-lg:w-full duration-200"
                    : "text-opacity-50 duration-200 max-lg:py-4 max-lg:px-6 w-full max-lg:border-[#10131A]"
                } hover:text-opacity-100`}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div
          className="text-4xl cursor-pointer lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <BiMenuAltRight />
        </div>
      </div>
    </>
  );
}

export default Navbar;
