import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import * as images from "../assets/home/Export";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shikharji - Explore Jainism</title>
        <meta
          name="description"
          content="Explore the spiritual significance of Jainism at Shikharji, the sacred pilgrimage site nestled in the serene Parasnath Hills. Discover ancient temples, revered Tirthankaras, and the historical Parasnath Temple."
        />
        <meta
          name="keywords"
          content="Shikharji, Parasnath, Jainism, pilgrimage, Tirthankaras, spiritual, temples, ancient, sacred, Parasnath Temple, history, explore"
        />
      </Helmet>
      <HeroImg />
      <Quotes />
      <Home3nav />
    </>
  );
}

export function HeroImg() {
  return (
    <>
      <div id="CrossFade">
        <img
          src={images.cloudAboveMountain}
          loading="lazy"
          alt="Clouds hovering above mountains, creating a scenic view."
        />
        <img
          src={images.foggyRoadView}
          loading="lazy"
          alt="Foggy road view, illustrating a serene and tranquil environment."
        />
        <img
          src={images.fogTreeMountain}
          loading="lazy"
          alt="Foggy mountain landscape with trees, creating a mystical atmosphere."
        />
        <img
          src={images.mountainsAboveCloud}
          loading="lazy"
          alt="View of mountains above the clouds, showcasing a breathtaking scenery."
        />
        <div className="CrossFade-intro">
          <h1>Shikharji: The Abode of Serenity</h1>
          <p>
            Explore the majestic beauty and spiritual aura of Shikharji, nestled
            amidst the lush greenery of Parasnath Hill. Discover the rich
            history and religious significance of this revered pilgrimage site,
            known for its breathtaking temples and serene surroundings.
          </p>
        </div>
      </div>
    </>
  );
}

export function Home3nav() {
  return (
    <>
      <div className="expand-container">
        <div id="shikharji" className="expand-section">
          <div className="expand-content">
            <Link to="/shikharji">
              <h1>Shikharji</h1>
            </Link>
          </div>

          <div className="expand-overlay"></div>
        </div>

        <div id="explore" className="expand-section">
          <div className="expand-content">
            <Link to="/explore">
              <h1>Explore</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>

        <div id="jainism" className="expand-section">
          <div className="expand-content">
            <Link to="/Jainism">
              <h1>Jainism</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>
      </div>
    </>
  );
}

export function Quotes() {
  return (
    <>
      {" "}
      <section className="Quotes-hero">
        <div className="Quotes-content">
          <div className="Quotes-contentBox">
            <blockquote>
              "The spiritual journey is individual, highly personal. It can't be
              organized or regulated. It isn't true that everyone should follow
              one path. Listen to your own truth."
              <span> Ram Dass</span>
            </blockquote>
          </div>
        </div>
        <div className="Quotes-box Quotes-images">
          <div className="Quotes-imgBox">
            <img
              src={images.manPrayingNature}
              loading="lazy"
              alt="Man praying in a serene natural environment."
            />
          </div>
          <div className="Quotes-imgBox">
            <img
              src={images.aiMeditationWoman}
              loading="lazy"
              alt="AI-generated depiction of a woman meditating"
            />
          </div>
          <div className="Quotes-imgBox">
            <img
              src={images.womanContemplatingSky}
              loading="lazy"
              alt="Female sitting and gazing up at the daytime sky."
            />
          </div>
          <div className="Quotes-imgBox">
            <img
              src={images.spiritualConceptsIllustration}
              loading="lazy"
              alt="Illustration depicting spiritual and philosophical concepts with symbolic imagery."
            />
          </div>
        </div>
      </section>
    </>
  );
}
