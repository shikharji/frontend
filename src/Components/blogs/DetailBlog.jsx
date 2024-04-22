import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../elements/Loading";

export default function DetailBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogDetail = async () => {
      try {
        const { data } = await axios.get(
          `https://api-srishikharji.vercel.app/blogs/${id}`
        );
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <BlogArticle
            title={blog.blogTitle}
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
  conclusion,
  sections = [],
}) {
  return (
    <>
      <main id="BlogArticle-main">
        <h1>{title}</h1>

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
