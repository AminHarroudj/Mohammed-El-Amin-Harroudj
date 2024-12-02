import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <>
      <div className="px-4 lg:px-16 py-16 lg:py-32 flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-10 justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-medium">
            Here You Can <span className="text-[#2EB2D3]">Contact</span> Me
          </h1>
          <p className="text-white text-opacity-50">
            Here, you can easily get in touch with me to discuss your project
            ideas, collaboration opportunities, or any inquiries you may have
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactMe;
