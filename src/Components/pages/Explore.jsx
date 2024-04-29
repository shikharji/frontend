import { Link } from "react-router-dom";
import "./styles/Explore.css";
import { Helmet } from "react-helmet";

export default function Explore() {
  return (
    <>
      <Helmet>
        <title>Explore Shikharji - Jainism Pilgrimage</title>
        <meta
          name="description"
          content="Explore the rich heritage and spiritual significance of Jainism at Shikharji. Dive into ancient temples, learn about revered Tirthankaras, and discover the history of the Parasnath Temple. Experience the beauty and serenity of this sacred pilgrimage site."
        />
        <meta
          name="keywords"
          content="Shikharji, Parasnath, Jainism, pilgrimage, Tirthankaras, temples, ancient, sacred, Parasnath Temple, history, heritage, spiritual, explore"
        />
      </Helmet>

      <Hero />
      <Card />
    </>
  );
}

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {" "}
      <div id="explore-wrapper">
        <section className="explore-banner">
          <div className="explore-content">
            <h2>Always Choose Good</h2>
            <p>
              The essence of Jainism lies in the principle of always choosing
              good. Jain teachings emphasize the importance of living a life of
              virtue, compassion, and non-violence. By making conscious choices
              that align with these principles, one can cultivate a peaceful and
              harmonious existence, not only benefiting oneself but also
              contributing to the well-being of others and the world around us.
            </p>
            <Link
              onClick={() => scrollToSection("hover-card")}
              className="explore-btn"
            >
              All Topics
            </Link>
          </div>
        </section>

        {/* <!--About Section--> */}

        <section className="explore-about">
          <div className="explore-row">
            <div className="explore-col50">
              <h2 className="explore-titeText">
                {" "}
                Explore Jainism and Shikharji
              </h2>
              <p>
                Welcome to our Shikharji website, dedicated to bringing you
                closer to the spiritual and natural wonders of this sacred
                place. Our mission is to provide a platform for learning,
                exploration, and connection for all those interested in Jainism
                and the beauty of Shikharji.
                <br />
                <br />
                Join us on a journey of discovery and enlightenment as we delve
                into the rich history, cultural significance, and profound
                teachings of Jainism. Through our website, we aim to foster a
                sense of community and understanding, where individuals from all
                walks of life can come together to share in the wisdom and
                tranquility that Shikharji offers.
              </p>
            </div>
            <div className="explore-col50">
              <div className="explore-imgbx">
                <img
                  src="https://cdn.pixabay.com/photo/2019/10/29/10/07/man-4586576_1280.jpg"
                  alt="Man view"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export function Card() {
  const ExploreItems = [
    {
      name: "Parasnath Hill",
      path: "/shikharji/parasnath",
      img: "https://cdn.pixabay.com/photo/2023/07/06/09/58/mountain-8110139_640.jpg",
    },
    {
      name: "Jainism",
      path: "/jainism",
      img: "https://cdn.pixabay.com/photo/2017/09/16/08/56/swim-2754903_640.jpg",
    },
    {
      name: "Tirthankara",
      path: "/tirthankara",
      img: "https://cdn.pixabay.com/photo/2021/11/05/05/52/mahavira-6770365_640.jpg",
    },
  ];
  return (
    <>
      <div id="hover-card">
        <h1>All Topics..</h1>
        <div className="hover-card-container">
          {ExploreItems.map((i) => {
            return (
              <>
                <div className="hoverbox">
                  <img
                    className="hoverbox__image"
                    src={i.img}
                    loading="lazy"
                    alt="Test Img"
                  />
                  <h3>{i.name}</h3>
                  <p>
                    Have fun with it. For the lack of a better word I call them
                    hangy downs. Let's have a happy little tree in here. There
                    are no limits in this world. Only think about one thing at a
                    time. Don't get greedy.
                  </p>
                  <Link to={i.path}>More infos</Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
