import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import FeatureJainism from "./FeatureJainism";
import "./StyleJainism.css";
import axios from "axios";
import CardBlogs from "../blogs/CardBlogs";
import { Helmet } from "react-helmet";
import * as image from "../assets/jainism/Export";
import apiUrl from "../utils/GetApiUrl";

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
              src={image.jainismIntroHero}
              loading="lazy"
              alt="Introduction to Jainism, showcasing its history and principles."
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
                src={image.jainismMeditation}
                loading="lazy"
                alt="Meditation in Jainism, focusing on spiritual contemplation and self-awareness."
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
                src={image.jainismMind}
                loading="lazy"
                alt="Mindfulness in Jainism, highlighting the importance of mental clarity and purity."
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
              src={image.jainismLive}
              loading="lazy"
              alt="Live a Jain way of life, emphasizing simplicity and non-violence."
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
        const response = await axios.get(`${apiUrl}/blogs/jainism`);
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
          <div className="blog-slider" x-data="{start: true, end: false}">
            <h1 className="blog-slider-title">All Jainism Articles</h1>
            <div className="blog-slider__content" x-ref="slider">
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
          </div>
        </>
      )}
    </>
  );
}
