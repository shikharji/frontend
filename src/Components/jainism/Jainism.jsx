import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import FeatureJainism from "./FeatureJainism";
import "./StyleJainism.css";
import axios from "axios";
import CardBlogs from "../blogs/CardBlogs";
import { Helmet } from "react-helmet";

export default function Jainism() {
  return (
    <>
      <Helmet>
        <title>Jainism - Explore the Teachings and Heritage</title>
        <meta
          name="description"
          content="Explore the profound teachings and rich heritage of Jainism. Learn about Jain texts, arts, philosophy, practices, principles, and cosmology. Dive into the spiritual depth of Jainism through insightful blogs and articles."
        />
        <meta
          name="keywords"
          content="Jainism, Jain texts, arts, philosophy, practices, principles, cosmology, blogs, spirituality, heritage, teachings"
        />
      </Helmet>
      <IntroHero />
      <FeatureJainism />
      <BlogJainism />
    </>
  );
}

export function IntroHero() {
  return (
    <>
      <main className="Custom-content">
        <section className="Custom-block section-part">
          <figure className="item-parallax-media">
            <img
              src="https://images.unsplash.com/photo-1689586695982-82072c5e545d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="item-parallax-content flex-container">
            <div className="centered-content jainism-head">
              <h1 className="head-large  head-centered">
                "Discover the Path of Ahimsa and
                <br />
                Spiritual Enlightenment in Jainism"
              </h1>
            </div>
          </div>
        </section>

        <section className="Custom-block">
          <div className="item-parallax-content flex-container img-grid">
            <figure className="img-gridItem type-right">
              <img
                src="https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758_1280.jpg"
                alt=""
              />
              <figcaption className="img-caption">
                <h2 className="head-small">Importance of Soul</h2>
                <p className="Custom-copy">
                  Jains believe that every living being has a soul (jiva) and
                  that all souls are equal and possess the potential for
                  infinite knowledge and bliss. The ultimate goal of Jainism is
                  to achieve liberation (moksha) by freeing the soul from the
                  cycle of birth, death, and rebirth.
                </p>
              </figcaption>
            </figure>
            <figure className="img-gridItem type-left">
              <img
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <figcaption className="img-caption">
                <h2 className="head-small">Importance of Mind</h2>
                <p className="Custom-copy copy-white">
                  Jains emphasize the importance of controlling the mind and
                  thoughts to achievespiritual purity and enlightenment.
                  Meditation, reflection, and self-discipline are key practices
                  in Jainism to calm the mind and focus on spiritual growth.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="Custom-block">
          <figure className="item-parallax-media">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/noah-silliman-141979.jpg"
              alt=""
            />
          </figure>
          <div className="item-parallax-content flex-container">
            <div className="centered-content">
              <h1 className="head-large">"Live and let live"</h1>
            </div>
          </div>
        </section>

        <section className="custom-properties-ftw">
          <h3 className="head-small head-centered">
            Explore More About Jainism
          </h3>
        </section>
      </main>
    </>
  );
}

export function BlogJainism() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://api-srishikharji.vercel.app/blogs/jainism"
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
          <h1 className="center-title">All Jainism Articles</h1>
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
