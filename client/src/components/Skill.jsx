function Skill({ children, title, percentage }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1>{title}</h1>
            <div className="w-[30px]">{children}</div>
          </div>
          <div className="text-white text-opacity-50">{percentage}%</div>
        </div>
        <div className="h-2 bg-[#2EB2D3] bg-opacity-20">
          <div
            className={"h-2 bg-[#2EB2D3]"}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Skill;
