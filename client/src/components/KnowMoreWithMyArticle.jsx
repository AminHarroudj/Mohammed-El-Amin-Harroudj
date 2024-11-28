import ArticleCard from "./ArticleCard";
import reactImg from "../assets/react.png";
import Button from "./Button";

function KnowMoreWithMyArticle() {
  return (
    <>
      <div className="px-16 py-32 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-5xl font-medium">
            Know More With My <span className="text-[#2EB2D3]">Article</span>
          </h1>
          <p className="text-white text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate and
            innovate developer
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 items-center justify-center">
          <div className="lg:pt-10">
            <ArticleCard
              imgSource={reactImg}
              title={"How React Work"}
              description={
                "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
              }
            />
          </div>
          <div>
            <ArticleCard
              imgSource={reactImg}
              title={"How React Work"}
              description={
                "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
              }
            />
          </div>
          <div className="lg:pt-10">
            <ArticleCard
              imgSource={reactImg}
              title={"How React Work"}
              description={
                "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button title={"See More Articles"} />
        </div>
      </div>
    </>
  );
}

export default KnowMoreWithMyArticle;
