import "./StyleShikharji.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import CardBlogs from "../blogs/CardBlogs";
import { Link } from "react-router-dom";
import * as image from "../assets/shikharji/Export";
import apiUrl from "../utils/GetApiUrl";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Shikharji() {
  return (
    <>
      <Helmet>
        <title>Shikharji and Parasnath Hill</title>
        <meta
          name="description"
          content="Explore the sacred pilgrimage site of Shikharji, nestled in the serene Parasnath Hills. Embark on a spiritual journey, where ancient temples and revered tonks of Tirthankaras await."
        />
        <meta
          name="keywords"
          content="Shikharji, Parasnath, Jainism, pilgrimage, Tirthankaras, spiritual, temples, tonks, ancient, sacred, journey, explore"
        />
      </Helmet>
      <Hero />
      <FeatureShikharji />
      <BlogShikharji />
    </>
  );
}

export function Hero() {
  return (
    <>
      <div className="shikharji-main_container" id="home">
        <div className="shikharji-banner_image">
          <div className="shikharji-banner_content">
            <h1>
              Explore Shikharji:
              <br />
              <span> A Journey to Spiritual Awakening</span>
            </h1>
          </div>
        </div>

        <div className="shikharji-about">
          <h1 className="shikharji-title">About Shikharji</h1>
          <p>
            Discover the sacred pilgrimage site of Shikharji, nestled in the
            serene Parasnath Hills. Embark on a spiritual journey, where ancient
            temples and revered tonks of Tirthankaras await.
          </p>{" "}
          <br />
          <p>
            Shikharji, also known as Sammed Shikhar or Parasnath Hill, holds
            immense spiritual significance in Jainism. It is believed that
            twenty of the twenty-four Tirthankaras attained Moksha (liberation)
            here. The site is revered for its natural beauty and historical
            importance, attracting pilgrims and tourists from around the world.
          </p>
          <div className="shikharji-btn">
            <Link onClick={() => scrollToSection("shikharji-point")}>
              Learn More
            </Link>
          </div>
        </div>

        <div className="shikharji-services">
          <h1 className="shikharji-title">Why Visit Shikharji?</h1>
          <p>
            Shikharji offers a unique blend of spiritual rejuvenation and
            natural beauty. Here, you can experience:
          </p>

          <div className="shikharji-diff_services">
            <div className="shikharji-diff_service_item">
              <img
                src={image.girlSittingPeacefully}
                loading="lazy"
                alt="Girl sitting peacefully in a serene natural setting."
              />
              <h3>Spiritual Tranquility</h3>
              <p>
                Immerse yourself in the peaceful surroundings and connect with
                your spiritual self.
              </p>
            </div>
            <div className="shikharji-diff_service_item">
              <img
                src={image.wayToMountain}
                loading="lazy"
                alt="Path leading to the mountain, symbolizing the journey to Shikharji."
              />
              <h3>Natural Beauty</h3>
              <p>
                Explore the lush greenery and scenic landscapes, perfect for
                nature enthusiasts and photographers.
              </p>
            </div>
            <div className="shikharji-diff_service_item">
              <img
                src={image.cultureVisit}
                loading="lazy"
                alt="Cultural visit to Shikharji showcasing local traditions and customs."
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

export function FeatureShikharji() {
  const featureItem = [
    {
      title: "Jain Temples",
      img: image.jainTempleShikharji,
      description:
        "Showcase the famous Jain temples located on Parasnath Hill and their architectural beauty and spiritual significance.",
      alt: "ain temples in Shikharji, known for their architectural beauty and spiritual significance.",
      route: "temples",
    },
    {
      title: "Wildlife and Nature",
      img: image.wildlifeShikharji,
      description:
        "Highlight the rich biodiversity of the Parasnath Wildlife Sanctuary, which surrounds Parasnath Hill, and the importance of conservation efforts in the region.",
      alt: "Wildlife and nature in Shikharji, showcasing the biodiversity of the region.",
      route: "wildlife",
    },
    {
      title: "Local Culture",
      img: image.cultureShikharji,
      description:
        "Explore the local culture and traditions of the region surrounding Shikharji, including the lifestyle of the indigenous tribes and their interactions with Jain pilgrims.",
      alt: "Cultural aspects of Shikharji, showcasing local traditions and heritage.",
      route: "local",
    },
    {
      title: "Hotels and Facilities",
      img: image.hotelsShikharji,
      description:
        "Showcase the various hotels and facilities available to visitors, ranging from simple lodges to more luxurious options, and the facilities provided for pilgrims and tourists.",
      alt: "Hotels and accommodation options in Shikharji for tourists and pilgrims.",
      route: "hotels",
    },
    {
      title: "Tonks of Tirthankaras",
      img: image.tonksShikharji,
      description:
        "Explore the tonks (temples) dedicated to the Tirthankaras on Parasnath Hill and their historical and religious significance.",
      alt: "Tonks (pilgrimage centers) in Shikharji, important for Jain devotees.",
      route: "tonks",
    },
  ];

  const truncatedDescription = (description) => {
    const maxLength = 150;
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Truncate and add "..."
    } else {
      return description; // Return the original description if it's shorter
    }
  };

  return (
    <>
      <section id="shikharji-point" className="custom-properties-ftw">
        <h3 className="head-small head-centered">
          Explore More About Shikharji
        </h3>
      </section>
      <main className="blogs-wrapper">
        <section className="blogs-hero">
          <h1>
            Parasnath <br /> Mountain
          </h1>
          <article>
            <p>
              Explore the geological and ecological significance of Parasnath
              Hill, the highest peak in Jharkhand and an important pilgrimage
              site for Jains.
            </p>
            <Link className="blogs-a" to="parasnath">
              Explore the Mountain!
            </Link>
          </article>
        </section>
        <section className="breweries">
          <ul>
            {featureItem.map((item) => (
              <>
                <li>
                  <figure>
                    <img src={item.img} loading="lazy" alt={item.alt} />
                    <figcaption>
                      <h3>{item.title}</h3>
                    </figcaption>
                  </figure>
                  <p>{truncatedDescription(item.description)}</p>
                  <Link className="blogs-a" to={item.route}>
                    Visit this..
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </section>
      </main>
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
        const response = await axios.get(`${apiUrl}/blogs/shikharji`);
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
          {" "}
          <div className="blog-slider" x-data="{start: true, end: false}">
            <h1 className="blog-slider-title">All shikharji Articles</h1>
            <div className="blog-slider__content" x-ref="slider">
              {blogs.slice(0, visibleBlogs).map((blog) => (
                <div key={blog._id}>
                  <CardBlogs
                    id={blog._id}
                    img={blog.img}
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
