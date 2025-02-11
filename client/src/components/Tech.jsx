/* eslint-disable react/prop-types */
function Tech({ children, title }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-primary"></div>
        <h1>{title}</h1>
        <div className="w-[30px]">{children}</div>
      </div>
    </>
  );
}

export default Tech;
