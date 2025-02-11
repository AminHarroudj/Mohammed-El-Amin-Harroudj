/* eslint-disable react/prop-types */
function ServiceCard({ children, title, description }) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-center px-4 py-8 bg-primary bg-opacity-20 border-2 border-primary border-opacity-50 rounded-lg cursor-pointer hover:scale-105 hover:bg-opacity-30 duration-200">
        <div className="text-primary text-7xl">{children}</div>
        <h1 className="text-2xl font-medium text-secondary">{title}</h1>
        <p className="text-black text-opacity-50">{description}</p>
      </div>
    </>
  );
}

export default ServiceCard;
