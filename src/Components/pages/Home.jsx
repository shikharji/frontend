import PageTitle from "../elements/PageTitle";
import "./styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <PageTitle title="Home" />
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
          src="https://cdn.pixabay.com/photo/2022/10/23/12/50/trees-7541217_1280.jpg"
          alt="lost img from pixabay"
        />
        <img
          src="https://cdn.pixabay.com/photo/2022/03/28/10/06/mountain-7097104_1280.jpg"
          alt="lost img from pixabay"
        />
        <img
          src="https://cdn.pixabay.com/photo/2021/11/17/16/59/mountain-6804152_1280.jpg"
          alt="lost img from pixabay"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
          alt="lost img from pixabay"
        />
        <div class="CrossFade-intro">
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
              src="https://cdn.pixabay.com/photo/2016/04/24/20/56/man-1350599_1280.jpg"
              alt="Img1"
            />
          </div>
          <div className="Quotes-imgBox">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/03/01/34/ai-generated-7895764_1280.jpg"
              alt="Img2"
            />
          </div>
          <div className="Quotes-imgBox">
            <img
              src="https://cdn.pixabay.com/photo/2020/11/26/15/28/woman-5779323_1280.jpg"
              alt="Img3"
            />
          </div>
          <div className="Quotes-imgBox">
            <img
              src="https://cdn.pixabay.com/photo/2024/04/05/05/17/yoga-8676568_1280.jpg"
              alt="Img4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
