import { Link } from "react-router-dom";
import { useState } from "react";
import contactIcon from "../assets/contact-svgrepo-com.svg";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_795cq4u";
    const templateID = "template_swo1lx2";
    const userID = "cJmc5lyxapwUXETNq";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your message has been sent successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops, something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-2xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium text-primary">Get In Touch</h1>
          <p className="text-black text-opacity-50 text-base">
            Feel free to reach out to me here
          </p>
          <div>
            <form
              className="flex flex-col gap-4 items-end"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-primary">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-6 rounded-xl text-black outline-none w-full bg-black bg-opacity-5"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-primary">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-6 rounded-xl text-black outline-none w-full bg-black bg-opacity-5"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-primary">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-6 rounded-xl text-black outline-none w-full bg-black bg-opacity-5"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 w-full font-medium">
                <label htmlFor="">
                  Your <span className="text-primary">Message</span>
                </label>
                <textarea
                  className="py-3 px-6 rounded-xl text-black outline-none h-[100px] w-full bg-black bg-opacity-5"
                  placeholder="Enter Your Message"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary py-3 px-10 rounded-full hover:text-primary hover:bg-transparent border-2 border-primary hover:border-2 hover:border-primary text-white hover:scale-105 duration-200"
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
              <FaLocationDot className="text-2xl text-primary" />
              <p className="text-black">
                Constantine , Algeria
              </p>
            </div>
            <div className="flex gap-4">
              <IoMdMail className="text-2xl text-primary" />
              <p className="text-black">
                amin.harroudj.2002@gmail.com
              </p>
            </div>
            <div className="flex gap-4">
              <FaPhoneAlt className="text-2xl text-primary" />
              <p className="text-black">0556648005</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to={
                "https://www.linkedin.com/in/harroudj-mohammed-el-amin-655315252/"
              }
              target="_blank"
            >
              <FaLinkedin className="text-4xl text-primary hover:scale-125 duration-200" />
            </Link>
            <Link to={"https://github.com/AminHarroudj"} target="_blank">
              <FaGithub className="text-4xl text-primary hover:scale-125 duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
