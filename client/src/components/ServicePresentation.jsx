/* eslint-disable react/prop-types */
function ServicePresentation({ number, title, description }) {
  return (
    <>
      <div className="flex max-lg:flex-col gap-4 justify-center items-center text-center px-4 py-8 bg-primary bg-opacity-20 border-2 border-primary border-opacity-50 rounded-lg cursor-pointer hover:scale-105 hover:bg-opacity-30 duration-200">
        <div className="flex items-center gap-4 text-3xl font-medium">
          <h1 className="text-secondary">{number}</h1>
          <h1 className="text-primary">{title}</h1>
        </div>
        <p className="text-black text-opacity-50">{description}</p>
      </div>
    </>
  );
}

export default ServicePresentation;
