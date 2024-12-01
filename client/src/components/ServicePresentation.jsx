function ServicePresentation({ number, title, description }) {
  return (
    <>
      <div className="flex max-lg:flex-col gap-4 justify-center items-center text-center px-4 py-8 bg-[#2EB2D3] bg-opacity-20 border-2 border-[#2EB2D3] border-opacity-50 rounded-lg cursor-pointer hover:scale-105 hover:bg-opacity-40 duration-200">
        <div className="flex items-center gap-4 text-3xl font-medium">
          <h1>{number}</h1>
          <h1 className="text-[#2EB2D3]">{title}</h1>
        </div>
        <p className="text-white text-opacity-50">{description}</p>
      </div>
    </>
  );
}

export default ServicePresentation;
