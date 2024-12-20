import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../elements/Loading";
import { Helmet } from "react-helmet";
import apiUrl from "../utils/GetApiUrl";
import axios from "axios";

export default function DetailBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogDetail = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/blogs/${id}`);
        if (data?.success) {
          setBlog(data?.blog);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBlogDetail();
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{`${blog?.blogTitle || "Article"} - Blog`}</title>
        <meta name="description" content={blog?.introduction || ""} />
        <meta
          name="keywords"
          content={`blog, ${blog?.blogTitle || ""}, ${
            blog?.tags?.join(", ") || ""
          }`}
        />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <>
          <BlogArticle
            title={blog.blogTitle}
            img={blog.img}
            intro={blog.introduction}
            sections={blog.sections}
            conclusion={blog.conclusion}
            quotes={blog.quotes}
          />
        </>
      )}
    </>
  );
}

export function BlogArticle({
  title,
  quotes,
  intro,
  img,
  conclusion,
  sections = [],
}) {
  return (
    <>
      <main id="BlogArticle-main">
        <h1>{title}</h1>
        <img src={img} alt="Lost" />
        <h2>A Short Introduction:</h2>

        <p>
          {intro}
          <b> Read full article to know more...</b>
        </p>

        <blockquote>{quotes}</blockquote>
        {sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}

        <h2>Conclusion</h2>

        <p>{conclusion}</p>
      </main>
    </>
  );
}
