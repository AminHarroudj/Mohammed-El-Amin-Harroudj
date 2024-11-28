import { Link } from "react-router-dom";
import contactIcon from "../assets/contact-svgrepo-com.svg";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function ContactForm() {
  return (
    <>
      <div className="bg-[#2EB2D3] bg-opacity-20 border-2 border-[#2EB2D3] rounded-xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium text-[#2EB2D3]">Get In Touch</h1>
          <p className="text-white text-opacity-50 text-base">
            My experience and knowledg is dedicated to providing exceptional
            customer service.
          </p>
          <div>
            <form action="" className="flex flex-col gap-4 items-end">
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-[#2EB2D3]">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-6 rounded-xl text-black outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-[#2EB2D3]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-6 rounded-xl text-black outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-[#2EB2D3]">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-6 rounded-xl text-black outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-[#2EB2D3]">Message</span>
                </label>
                <textarea
                  name=""
                  id=""
                  className="py-3 px-6 rounded-xl text-black outline-none h-[100px] w-full"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#2EB2D3] py-3 px-10 rounded-full hover:text-[#2EB2D3] hover:bg-transparent border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-105 duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-10 items-center">
          <div>
            <img src={contactIcon} alt="" className="w-[300px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FaLocationDot className="text-2xl text-[#2EB2D3]" />
              <p className="text-white text-opacity-50">
                Constantine , Algeria
              </p>
            </div>
            <div className="flex gap-4">
              <IoMdMail className="text-2xl text-[#2EB2D3]" />
              <p className="text-white text-opacity-50">
                amin.harroudj.2002@gmail.com
              </p>
            </div>
            <div className="flex gap-4">
              <FaPhoneAlt className="text-2xl text-[#2EB2D3]" />
              <p className="text-white text-opacity-50">0556648005</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link>
              <FaLinkedin className="text-4xl hover:text-[#2EB2D3] hover:scale-125 duration-200" />
            </Link>
            <Link>
              <FaGithub className="text-4xl hover:text-[#2EB2D3] hover:scale-125 duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
