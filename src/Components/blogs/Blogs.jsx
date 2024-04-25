import React, { useEffect, useState } from "react";
import CardBlogs from "./CardBlogs";
import Loading from "../elements/Loading";
import axios from "axios";
import { Helmet } from "react-helmet";

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

      <Hero />
      <AllBlogs />
    </>
  );
}

export function Hero() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const response = await axios.get(
          "https://api-srishikharji.vercel.app/blogs"
        );
        setArticles(response.data?.blogs || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recent articles:", error);
        setLoading(false);
      }
    };

    fetchRecentArticles();
  }, []);

  const recentThreeArticles = articles.slice(0, 3);

  return (
    <>
      <h2 className="center-title">Recent Articles</h2>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="Blog-hero-articles">
            {recentThreeArticles.map((article) => (
              <div className="Blog-hero-article">
                <div className="Blog-hero-left">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg"
                    alt=""
                  />
                </div>
                <div className="Blog-hero-right">
                  <p className="Blog-hero-date">Juillet, 24, 2020</p>
                  <h1>{article.blogTitle}</h1>
                  <p className="Blog-hero-description">
                    {article.introduction}
                  </p>
                  <p className="Blog-hero-auteur">Julie Lablonde</p>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}

export function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://api-srishikharji.vercel.app/blogs"
        );
        if (data?.success) {
          setBlogs(shuffle(data?.blogs));
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
