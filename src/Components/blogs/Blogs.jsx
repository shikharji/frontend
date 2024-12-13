import { useEffect, useState } from "react";
import CardBlogs from "./CardBlogs";
import { Helmet } from "react-helmet";
import apiUrl from "../utils/GetApiUrl";
import Loading from "../elements/Loading";
import axios from "axios";
import "./StyleBlogs.css";

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Shikharji Blog - Explore Articles and Posts</title>
        <meta
          name="description"
          content="Explore insightful articles and posts about Jainism, temples, and the pilgrimage site of Shikharji. Learn about the spiritual significance, history, and practices of Jainism through our blog."
        />
        <meta
          name="keywords"
          content="Shikharji, Jainism, temples, pilgrimage, blog, articles, posts, spirituality, history, practices, insights"
        />
      </Helmet>

      <AllBlogs />
    </>
  );
}

export function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle...
  //   while (currentIndex !== 0) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/blogs`);
        if (data?.success) {
          // setBlogs(shuffle(data?.blogs));
          setBlogs(data?.blogs);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getAllBlogs();
  }, []);

  const loadMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  return (
    <>
      <h1 className="center-title">All Articles</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="CardBlogs-container">
            {blogs.slice(0, visibleBlogs).map((blog) => (
              <div key={blog._id}>
                <CardBlogs
                  id={blog._id}
                  title={blog.blogTitle}
                  desc={blog.introduction}
                  category={blog.subcategory}
                  img={blog.img}
                />
              </div>
            ))}
          </div>
          {visibleBlogs < blogs.length && (
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          )}
        </>
      )}
    </>
  );
}
