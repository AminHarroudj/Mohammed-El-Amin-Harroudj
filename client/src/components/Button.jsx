/* eslint-disable react/prop-types */
function Button({ title }) {
  return (
    <>
      <button className="bg-primary text-white py-3 px-10 rounded-full border-2 border-primary hover:border-2 hover:border-primary hover:scale-105 duration-200">
        {title}
      </button>
    </>
  );
}

export default Button;
