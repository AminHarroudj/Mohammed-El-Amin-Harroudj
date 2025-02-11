import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-primary text-white py-6 flex justify-center
       items-center gap-2 max-lg:text-base">
        <FaRegCopyright />
        <p>Copyright , Mohammed El Amin Harroudj</p>
      </div>
    </>
  );
}

export default Footer;
