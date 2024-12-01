import BlogContent from "../components/BlogContent";
import BlogHome from "../components/BlogHome";
import ContactMe from "../components/ContactMe";

function Blog() {
  return (
    <>
      <div>
        <BlogHome />
        <BlogContent />
        <ContactMe />
      </div>
    </>
  );
}

export default Blog;
