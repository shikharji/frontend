import "./StyleShikharji.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import CardBlogs from "../blogs/CardBlogs";
import PageTitle from "../elements/PageTitle";
import FeatureShikharji from "./FeatureShikharji";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Shikharji() {
  return (
    <>
      <PageTitle title="Shikharji" />
      <Hero />
      <FeatureShikharji />
      <BlogShikharji />
    </>
  );
}

export function Hero() {
  return (
    <>
      <div class="shikharji-main_container" id="home">
        <div class="shikharji-banner_image">
          <div class="shikharji-banner_content">
            <h1>
              Explore Shikharji:
              <br />
              <span> A Journey to Spiritual Awakening</span>
            </h1>
            <p>
              Discover the sacred pilgrimage site of Shikharji, nestled in the
              serene Parasnath Hills. Embark on a spiritual journey, where
              ancient temples and revered tonks of Tirthankaras await.
            </p>
          </div>
        </div>

        <div class="shikharji-about">
          <h1 class="shikharji-title">About Shikharji</h1>
          <p>
            Shikharji, also known as Sammed Shikhar or Parasnath Hill, holds
            immense spiritual significance in Jainism. It is believed that
            twenty of the twenty-four Tirthankaras attained Moksha (liberation)
            here. The site is revered for its natural beauty and historical
            importance, attracting pilgrims and tourists from around the world.
          </p>
          <div class="shikharji-btn">
            <Link onClick={() => scrollToSection("shikharji-point")}>
              Learn More
            </Link>
          </div>
        </div>

        <div class="shikharji-services">
          <h1 class="shikharji-title">Why Visit Shikharji?</h1>
          <p>
            Shikharji offers a unique blend of spiritual rejuvenation and
            natural beauty. Here, you can experience:
          </p>

          <div class="shikharji-diff_services">
            <div class="shikharji-diff_service_item">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/01/20/15/girl-1562025_1280.jpg"
                alt="Service_image"
              />
              <h3>Spiritual Tranquility</h3>
              <p>
                Immerse yourself in the peaceful surroundings and connect with
                your spiritual self.
              </p>
            </div>
            <div class="shikharji-diff_service_item">
              <img
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
                alt="Service_image"
              />
              <h3>Natural Beauty</h3>
              <p>
                Explore the lush greenery and scenic landscapes, perfect for
                nature enthusiasts and photographers.
              </p>
            </div>
            <div class="shikharji-diff_service_item">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/14/17/19/india-1457099_960_720.jpg"
                alt="Service_image"
              />
              <h3>Cultural Heritage</h3>
              <p>
                Discover the rich cultural heritage of Jainism through the
                ancient temples and historical sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function BlogShikharji() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(5);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://api-srishikharji.vercel.app/blogs/shikharji"
        );
        if (response.data.success) {
          setBlogs(response.data.blogs);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const loadMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="center-title">All shikharji Articles</h1>
          <div className="CardBlogs-container">
            {blogs.slice(0, visibleBlogs).map((blog) => (
              <div key={blog._id}>
                <CardBlogs
                  id={blog._id}
                  title={blog.blogTitle}
                  tags={blog.tags}
                  desc={blog.introduction}
                />
              </div>
            ))}
            {visibleBlogs < blogs.length && (
              <button className="load-more-btn" onClick={loadMore}>
                Load More
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
