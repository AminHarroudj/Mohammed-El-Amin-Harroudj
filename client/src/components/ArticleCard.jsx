import Button from "./Button";

function ArticleCard({ imgSource, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 bg-[#2EB2D3] bg-opacity-20 border-2 border-[#2EB2D3] rounded-lg hover:bg-opacity-40 duration-200 text-center">
        <img src={imgSource} alt="" className="rounded-lg" />
        <div className="flex flex-col items-center gap-2 px-4">
          <h1 className="text-2xl font-medium">{title}</h1>
          <p className="text-white text-opacity-50 text-base">{description}</p>
        </div>
        <div className="px-4 pb-4">
          <Button title={"Show Article"} />
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
