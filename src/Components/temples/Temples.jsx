import { Link } from "react-router-dom";
import PageTitle from "../elements/PageTitle";
import "./StyleTemples.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import CardTemple from "./CardTemple";
import FeatureHero from "../elements/FeatureHero";

export default function Temples() {
  return (
    <>
      <PageTitle title="Temples" />
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
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2019/06/01/09/53/ranakpur-4243758_1280.jpg)",
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
            backgroundImage:
              "url(https://images.unsplash.com/photo-1684990214842-a5b1c8761a4e?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
            backgroundImage:
              "url(https://images.unsplash.com/photo-1633135612391-13c8a576b836?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
            backgroundImage:
              "url(https://images.pexels.com/photos/10986718/pexels-photo-10986718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
      <div id="height-100vh">
        <h1 className="center-title">Explore temples by Location</h1>
        <div className="temple-Location-wrapper">
          <div className="temple-Location-card">
            <h3 className="temple-Location-card-title">Around the world</h3>
            <p className="temple-Location-card-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="temple-Location-card-btn">
              <Link to="world">See all..</Link>
            </button>
          </div>
          <div className="temple-Location-card">
            <h3 className="temple-Location-card-title">
              Indian Divine Temples
            </h3>
            <p className="temple-Location-card-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="temple-Location-card-btn">
              {" "}
              <Link to="indian">See all..</Link>
            </button>
          </div>
          <div className="temple-Location-card">
            <h3 className="temple-Location-card-title">
              Pakistan Sacred temples
            </h3>
            <p className="temple-Location-card-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="temple-Location-card-btn">
              <Link to="pakistan">See all..</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Types() {
  return (
    <>
      <h1 className="center-title">Explore temple by their types</h1>
      <div className="panels">
        <div className="panels__container">
          <Link to="cave" className="panel">
            <div
              className="panel__content"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1708669530767-1bfcd6e8ec5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <h3 className="panel__title">Cave temples</h3>
            </div>
          </Link>
          <Link to="main" className="panel">
            <div
              className="panel__content"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2014/01/14/06/19/manas-mandir-244142_1280.jpg)",
              }}
            >
              <h3 className="panel__title">Main temples</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
