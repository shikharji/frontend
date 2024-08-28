import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StyleTirthankara.css";
import CardTirthankara from "./CardTirthankara";
import Loading from "../elements/Loading";
import { Helmet } from "react-helmet";
import apiUrl from "../utils/GetApiUrl";

export default function Tirthankara() {
  return (
    <>
      <Helmet>
        <title>Tirthankaras - Enlightened Spiritual Leaders</title>
        <meta
          name="description"
          content="Learn about the Tirthankaras in Jainism, the enlightened spiritual leaders who have achieved liberation. Explore the life stories, teachings, and significance of each Tirthankara in the Jain tradition."
        />
        <meta
          name="keywords"
          content="Tirthankaras, Jainism, spiritual leaders, liberation, life stories, teachings, significance, Jain tradition"
        />
      </Helmet>

      <Hero />
      <Intro />
      <AllTirthankara />
    </>
  );
}
export function Hero() {
  return (
    <>
      <section id="HeroTirthankara">
        <h1>
          "Explore the Tirthankaras, revered spiritual figures in Jainism."
        </h1>
        <p>
          Tirthankaras are spiritual leaders in Jainism, embodying qualities
          like omniscience, compassion, and unwavering guidance.
        </p>
      </section>
    </>
  );
}

export function Intro() {
  return (
    <>
      <section id="IntroTirthankara">
        <div>
          <h2>Spiritual Attributes:</h2>
          <hr />
          <p>
            Tirthankaras, central to Jainism, embody key spiritual qualities.
            They attain omniscience, show boundless compassion, and guide with
            unwavering energy, inspiring spiritual seekers.
          </p>
        </div>

        <div>
          <h2>Moral Virtues:</h2>
          <hr />
          <p>
            The Tirthankaras embody moral virtues, showcasing infinite
            renunciation, perseverance, and purity. Their teachings inspire Jain
            followers to lead a morally upright life.
          </p>
        </div>

        <div>
          <h2>Personal Qualities:</h2>
          <hr />
          <p>
            The Tirthankaras embody infinite strength, knowledge, and bliss,
            inspiring followers with their profound wisdom and inner peace.
          </p>
        </div>
        <div>
          <h2>Impact and Influence:</h2>
          <hr />
          <p>
            The Tirthankaras shine with infinite glory, inspiring reverence and
            positively impacting others towards spiritual growth.
          </p>
        </div>
      </section>
    </>
  );
}

export function AllTirthankara() {
  const [tirthankar, setTirthankar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleTirthankar, setVisibleTirthankar] = useState(6);

  useEffect(() => {
    const getAllTirthankar = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/tirthankar`);
        if (data?.success) {
          setTirthankar(data?.tirthankar);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getAllTirthankar();
  }, []);

  const loadMore = () => {
    setVisibleTirthankar((prevVisibleTirthankar) => prevVisibleTirthankar + 3);
  };
  return (
    <>
      <h1 className="center-title">All Tirthankaras</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div id="Tirthankara-card-wrapper">
            {tirthankar.slice(0, visibleTirthankar).map((t) => (
              <div key={t._id}>
                <CardTirthankara
                  id={t._id}
                  rank={t.rank}
                  name={t.name}
                  symbol={t.symbol}
                  birthPlace={t.birthPlace}
                />
              </div>
            ))}{" "}
          </div>
          {visibleTirthankar < tirthankar.length && (
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          )}
        </>
      )}
    </>
  );
}
