import ArticleCard from "./ArticleCard";
import Button from "./Button";
import reactImg from "../assets/react.png";

function BlogContent() {
  return (
    <>
      <div className="px-4 lg:px-16 pt-16 lg:pt-32 flex flex-col items-center gap-6 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-10 justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-medium">
            My <span className="text-[#2EB2D3]">Articles</span>
          </h1>
          <p className="text-white text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate
            developer
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center">
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
          <ArticleCard
            imgSource={reactImg}
            title={"How React Work"}
            description={
              "react js is a library of javascript v react js is a library of javascript react js is a library of javascript react js is a library of javascript"
            }
          />
        </div>
        <Button title={"Demand Free Consultation"} />
      </div>
    </>
  );
}

export default BlogContent;
