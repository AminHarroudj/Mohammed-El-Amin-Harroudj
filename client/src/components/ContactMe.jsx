import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <>
      <div className="px-16 py-32 flex flex-col gap-10">
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-5xl font-medium">
            Here You Can <span className="text-[#2EB2D3]">Contact</span> Me
          </h1>
          <p className="text-white text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate
            developer
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
