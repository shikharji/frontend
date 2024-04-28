import { Link } from "react-router-dom";
import "./StyleTemples.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import CardTemple from "./CardTemple";
import FeatureHero from "../elements/FeatureHero";
import { Helmet } from "react-helmet";
import * as image from "../assets/temples/Export";

export default function Temples() {
  return (
    <>
      <Helmet>
        <title>Jain Temples - Explore Sacred Sites</title>
        <meta
          name="description"
          content="Discover a comprehensive list of Jain temples around the world and in India, categorized as ancient, cave, or main temples. Explore the architectural beauty, historical significance, and spiritual aura of these sacred sites."
        />
        <meta
          name="keywords"
          content="Jain temples, temples in India, temples around the world, ancient temples, cave temples, main temples, architectural beauty, historical significance, spiritual aura"
        />
      </Helmet>

      <Hero />
      <Types />
      <Location />
      <FeatureHero
        title="Waana Explore all Jain Temples?"
        route="temple/all"
        desc="Experience the richness of Jain culture and spirituality by exploring all Jain temples, each a symbol of devotion and architectural splendor."
        image="https://cdn.pixabay.com/photo/2014/01/14/06/18/manas-mandir-244140_1280.jpg"
      />
    </>
  );
}

export function Hero() {
  return (
    <>
      <section
        className="Feature-Hero"
        style={{
          backgroundImage: `url(${image.templeHeroImage})`,
        }}
      >
        <div className="Feature-Hero-content">
          <h1 className="Feature-Hero-title ">
            Discover the Beauty of
            <br /> Jain Temples.
          </h1>
        </div>
      </section>

      <div className="Feature-Teaser">
        <div
          className="Feature-Teaser-image"
          style={{
            backgroundImage: `url(${image.templeArchitecture})`,
          }}
        ></div>
        <div className="Feature-Teaser-content">
          <h2>Marvel at Intricate Architecture</h2>
          <p>
            Jain temples are renowned for their exquisite marble carvings and
            intricate architectural details that reflect centuries of
            craftsmanship.
          </p>
        </div>
      </div>
      <div className="Feature-Teaser">
        <div
          className="Feature-Teaser-image"
          style={{
            backgroundImage: `url(${image.templeSpiritual})`,
          }}
        ></div>
        <div className="Feature-Teaser-content">
          <h2>Experience Spiritual Tranquility</h2>
          <p>
            Visit these temples to experience a sense of peace and tranquility,
            away from the hustle and bustle of everyday life.
          </p>
        </div>
      </div>
      <div className="Feature-Teaser">
        <div
          className="Feature-Teaser-image"
          style={{
            backgroundImage: `url(${image.templeAncient})`,
          }}
        ></div>
        <div className="Feature-Teaser-content">
          <h2>Discover Ancient Wisdom</h2>
          <p>
            Jain temples are not just architectural marvels but also storehouses
            of ancient wisdom and teachings that inspire spiritual growth.
          </p>
        </div>
      </div>
    </>
  );
}

export function AllTemples() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleTemples, setVisibleTemples] = useState(6);

  useEffect(() => {
    const getAllTemples = async () => {
      try {
        const { data } = await axios.get(
          "https://api-srishikharji.vercel.app/temples"
        );
        if (data?.success) {
          setTemples(data?.temples);
          setLoading(false);
          document.title = "All jain temples";
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getAllTemples();
  }, []);

  const loadMore = () => {
    setVisibleTemples((prevVisibleTemples) => prevVisibleTemples + 4);
  };
  return (
    <>
      <h1 className="center-title">Explore All Jain Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="Multi-portfolio">
            {temples.slice(0, visibleTemples).map((temple) => {
              const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
              return (
                <CardTemple
                  key={temple._id}
                  id={temple._id}
                  img={temple.img}
                  name={temple.templeName}
                  location={location}
                  description={temple.introduction}
                />
              );
            })}
          </div>
          {visibleTemples < temples.length && (
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          )}
        </>
      )}
    </>
  );
}

export function Location() {
  return (
    <>
      <h1 className="center-title">Explore temple by their Locations</h1>
      <div className="expand-container">
        <div id="indian-temple" className="expand-section">
          <div className="expand-content">
            <Link to="indian">
              <h1>Indian</h1>
            </Link>
          </div>

          <div className="expand-overlay"></div>
        </div>

        <div id="pakistan-temple" className="expand-section">
          <div className="expand-content">
            <Link to="pakistan">
              <h1>Pakistan</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>

        <div id="world-temple" className="expand-section">
          <div className="expand-content">
            <Link to="world">
              <h1>World</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>
      </div>
    </>
  );
}

export function Types() {
  return (
    <>
      <h1 className="center-title">Explore temple by their types</h1>

      <div className="expand-container">
        <div id="Ancient-temple" className="expand-section">
          <div className="expand-content">
            <Link to="ancient">
              <h1>Ancient</h1>
            </Link>
          </div>

          <div className="expand-overlay"></div>
        </div>

        <div id="Main-temple" className="expand-section">
          <div className="expand-content">
            <Link to="main">
              <h1>Main</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>

        <div id="Cave-temple" className="expand-section">
          <div className="expand-content">
            <Link to="cave">
              <h1>Cave</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>
      </div>
    </>
  );
}
