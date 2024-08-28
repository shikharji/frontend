import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../elements/Loading";
import apiUrl from "../utils/GetApiUrl";

export default function DetailJainism() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`${apiUrl}/jainism/${id}`);
        const data = await response.json();
        setBlog(data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading /> // Show loading component if data is being fetched
      ) : (
        blog && (
          <>
            <div id="jainism-blog-wrapper">
              <h1 className="title">{blog.title}</h1>
              <p className="desc">{blog.introduction}</p>
              {blog.sections.map((section, index) => (
                <div key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
              ))}
              <h2>Conclusion</h2>
              <p>{blog.conclusion}</p>
            </div>
          </>
        )
      )}
    </>
  );
}
