import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../elements/Loading";
import FeatureHero from "../elements/FeatureHero";
import apiUrl from "../utils/GetApiUrl";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Mountain() {
  useEffect(() => {
    document.title = "Parasnath - Shikharji";
  }, []);
  return (
    <>
      <section
        className="LargeHero-hero LargeHero-image-as-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300')`,
        }}
      >
        <div className="LargeHero-hero-container">
          <p className="LargeHero-animate LargeHero-fadeInLeft LargeHero-delay-400">
            Mazgine cover hero style
          </p>
          <h1 className="LargeHero-hero-title LargeHero-animate LargeHero-fadeInLeft LargeHero-delay-600">
            This is a large hero section
          </h1>
          <Link
            to="/"
            className="LargeHero-hero-button LargeHero-animate LargeHero-fadeInLeft LargeHero-delay-800"
            title="Click to see more"
          >
            Click Me
          </Link>
        </div>
      </section>
      <section className="LargeHero-main-content">
        <h2>This is the additional content</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </>
  );
}
export function Temple() {
  useEffect(() => {
    document.title = "Temples - Shikharji";
  }, []);
  return (
    <>
      <section id="FixedBack-hero1" className="FixedBack-hero">
        <div className="FixedBack-inner">
          <div className="FixedBack-copy">
            <h1>Parasnath Hill and Shikharji</h1>
            <p>
              Parasnath Hill, located in the state of Jharkhand, India, is one
              of the most sacred places for Jains. It is believed to be the
              place where twenty of the twenty-four Jain Tirthankaras attained
              Moksha (liberation). Shikharji, the summit of Parasnath Hill, is
              the holiest place in Jainism and is visited by thousands of
              pilgrims every year.
            </p>
          </div>
        </div>
      </section>

      <section className="FixedBack-content">
        <div className="FixedBack-inner">
          <div className="FixedBack-copy">
            <h1>Caves of Parasnath Hill</h1>
            <p>
              Parasnath Hill is known for its many caves, which are of great
              historical and archaeological significance. These caves have been
              used by ascetics and monks for meditation and shelter for
              centuries.
            </p>
          </div>
        </div>
      </section>

      <section id="FixedBack-hero2" className="FixedBack-hero">
        <div className="FixedBack-inner">
          <div className="FixedBack-copy">
            <h1>An Inspiring Quote</h1>
            <p>
              "In every walk with nature, one receives far more than he seeks."
              - John Muir
            </p>
          </div>
        </div>
      </section>

      <section className="FixedBack-content">
        <div className="FixedBack-inner">
          <div className="FixedBack-copy">
            <h1>An inspiring quote</h1>
            <p>/-- file not found --/</p>
          </div>
        </div>
      </section>
      <FeatureHero
        title="Waana Explore all Jain Temples?"
        route="temple/all"
        desc="Experience the richness of Jain culture and spirituality by exploring all Jain temples, each a symbol of devotion and architectural splendor."
        image="https://cdn.pixabay.com/photo/2014/01/14/06/18/manas-mandir-244140_1280.jpg"
      />
    </>
  );
}
export function Tonks() {
  const [tonks, setTonks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Tonks - Shikharji";

    const fetchTonks = async () => {
      try {
        const response = await axios.get(`${apiUrl}/tonks`);
        setTonks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tonks:", error);
        setLoading(false);
      }
    };

    fetchTonks();
  }, []);

  return (
    <>
      <h1 className="center-title">All Tonks in Parasnath Hill</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="tonks-timeline">
          {tonks.map((item, index) => (
            <li key={index} className="">
              <h3 className="ff-accent">
                {item.rank}. {item.name}
              </h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export function Wildlife() {
  useEffect(() => {
    document.title = "Wildlife and Nature - Shikharji";
  }, []);
  return (
    <>
      <header className="wildlife-container">
        <h2 className="wildlife-title">
          Discover the Wildlife and Nature of Parasnath Hill
        </h2>
        <p className="wildlife-description">
          Explore the diverse flora and fauna that call Parasnath Hill their
          home. From exotic birds to rare plants, immerse yourself in the beauty
          of nature.
        </p>
        <Link
          className="wildlife-cta"
          onClick={() => scrollToSection("wildlife-and-nature")}
        >
          Explore More
        </Link>
      </header>

      {/* Now the card start */}

      <div className="WildlifeCard-grid">
        <div className="WildlifeCard-card">
          <div className="WildlifeCard-card__img">
            <img
              src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="WildlifeCard-card__contenido">
            <h3 className="WildlifeCard-card__title">
              Nature's Beauty Unveiled
            </h3>
            <div className="WildlifeCard-divider"></div>
            <p className="WildlifeCard-card__text">
              Explore the mesmerizing beauty of nature at Parasnath Hill. From
              lush green forests to majestic waterfalls, immerse yourself in the
              tranquility of the natural world.
            </p>
            <Link to="/" className="WildlifeCard-card__readbtn">
              read more
            </Link>
          </div>
        </div>
        <div className="WildlifeCard-card">
          <div className="WildlifeCard-card__img">
            <img
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="WildlifeCard-card__contenido">
            <h3 className="WildlifeCard-card__title">Wildlife Encounters</h3>
            <div className="WildlifeCard-divider"></div>
            <p className="WildlifeCard-card__text">
              Get up close and personal with the diverse wildlife of Parasnath
              Hill. From rare species of birds to exotic animals, experience the
              wonders of the natural world.
            </p>
            <Link to="/" className="WildlifeCard-card__readbtn">
              read more
            </Link>
          </div>
        </div>
      </div>

      <div id="wildlife-and-nature">Wildlife and more</div>
    </>
  );
}
export function Local() {
  useEffect(() => {
    document.title = "Local culture - Shikharji";
  }, []);
  return (
    <>
      <header className="local-header">
        <h1 className="local-page-title">
          Local Culture of Shikharji Parasnath Hill
        </h1>
      </header>
      <main className="local-main">
        <section className="local-section">
          <figure className="local-image-container">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/29/18/47/mountains-3048299_1280.jpg"
              loading="lazy"
              alt=""
            />
          </figure>
          <article className="local-content">
            <h2 className="local-section-title">
              Traditional Practices and Customs
            </h2>

            <p>
              Shikharji Parasnath Hill is steeped in rich cultural traditions
              and practices. The local population follows a unique blend of
              customs and rituals that have been passed down through
              generations.
            </p>
            <p>
              The hill is known for its vibrant festivals, including the annual
              pilgrimage of Jain devotees who visit the temples and tonks
              (shrines) located on the hill. These festivals are a celebration
              of faith and spirituality, attracting pilgrims from all over the
              world.
            </p>
            <p>
              The local cuisine is also a reflection of the region's culture,
              with dishes that are flavorful and diverse. Visitors to Shikharji
              Parasnath Hill can indulge in local delicacies and experience the
              unique flavors of the area.
            </p>
          </article>
        </section>
        <section className="local-section">
          <figure className="local-image-container">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/18/22/46/store-4945671_1280.jpg"
              loading="lazy"
              alt=""
            />
          </figure>
          <article className="local-content">
            <h2 className="local-section-title">Art and Handicrafts</h2>

            <p>
              The artisans of Shikharji Parasnath Hill are known for their
              exquisite craftsmanship. They produce a wide range of traditional
              handicrafts, including pottery, textiles, and woodwork, which are
              highly sought after for their beauty and quality.
            </p>
            <p>
              Visitors to the hill can explore local markets and shops to
              purchase these unique handicrafts, providing them with a glimpse
              into the region's rich artistic heritage.
            </p>
            <p>
              Art is also an integral part of the local culture, with many
              artists showcasing their talents through various forms such as
              music, dance, and theater. These artistic expressions add to the
              vibrant cultural tapestry of Shikharji Parasnath Hill.
            </p>
          </article>
        </section>
        <section className="local-section">
          <figure className="local-image-container">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/14/04/24/buffalo-1822581_1280.jpg"
              loading="lazy"
              alt=""
            />
          </figure>
          <article className="local-content">
            <h2 className="local-section-title">
              Local Traditions and Festivals
            </h2>

            <p>
              Shikharji Parasnath Hill is home to a rich tapestry of traditions
              and festivals that reflect the cultural diversity of the region.
              The local population celebrates various festivals throughout the
              year, each characterized by its unique customs and rituals.
            </p>
            <p>
              One of the most prominent festivals celebrated on the hill is the
              Mahavir Jayanti, which marks the birth anniversary of Lord
              Mahavir, the 24th Tirthankara of Jainism. The festival is
              celebrated with great fervor and includes rituals, prayers, and
              processions.
            </p>
            <p>
              Other festivals celebrated on the hill include Paryushan, Diwali,
              and Holi, which are celebrated with equal enthusiasm. These
              festivals bring the local community together and provide an
              opportunity to celebrate their cultural heritage.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export function Hotels() {
  useEffect(() => {
    document.title = "Hotels and facility - Shikharji";
  }, []);

  const HotelsList = [
    {
      name: "Madhuban Guest House ",
      rating: 3.7,
      img: "https://cdn.pixabay.com/photo/2022/11/02/19/24/hotel-7565884_1280.jpg",
    },
    {
      name: "Taran Bhavan",
      rating: 3.7,
      img: "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_1280.jpg",
    },
    {
      name: "Nirmala Niwas",
      rating: 3.7,
      img: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_1280.jpg",
    },
    {
      name: "Dharm Mangal Vidyapith",
      rating: 3.7,
      img: "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_1280.jpg",
    },
  ];
  return (
    <>
      {/* hero */}
      <section className="facility-showcase-area" id="facility-showcase">
        <div className="facility-showcase-container">
          <h1 className="facility-main-title" id="facility-home">
            Hotel & Facility
          </h1>

          <p>
            Experience luxury and comfort with our top-notch hotels and
            facilities.
          </p>
          <Link
            onClick={() => scrollToSection("all-hotels-menu")}
            className="facility-btn facility-btn-primary"
          >
            Explore hotels
          </Link>
        </div>
      </section>

      <section id="facility-about">
        <div className="facility-about-wrapper facility-container">
          <div className="facility-about-text">
            <p className="facility-small">About Us</p>
            <h2>We've been providing exceptional services for 10 years</h2>
            <p>
              At Eat Right Food, we pride ourselves on providing exceptional
              services for over a decade. Our journey began with a simple
              mission: to promote healthy eating habits and offer delicious,
              nutritious meals to our patrons. Over the years, we've perfected
              our craft, combining culinary expertise with a passion for
              wellness.
            </p>
          </div>
          <div className="facility-about-img">
            <img
              src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg"
              loading="lazy"
              alt="food"
            />
          </div>
        </div>
      </section>
      {/* hero */}

      {/* all hotels */}
      <section id="all-hotels-menu">
        <h2 className="all-hotels-menu-heading">Explore All hotels</h2>
        <div className="all-hotels-menu-container facility-container">
          {HotelsList.map((i) => {
            return (
              <>
                <div className="all-hotels-menu-item">
                  <div className="all-hotels-img">
                    <img src={i.img} loading="lazy" alt="" />
                  </div>
                  <div className="all-hotels-description">
                    <h2 className="all-hotels-titile">{i.name}</h2>
                    <p>Rating: {i.rating}</p>

                    <p className="all-hotels-price">Price: &#8377; 250/day</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* all hotels */}

      {/* foods section */}
      <section id="all-hotels">
        <h2>Types of food</h2>
        <div className="all-hotels-container facility-container">
          <div className="all-hotels-type facility-fruite">
            <div className="facility-img-container">
              <img
                src="https://i.postimg.cc/yxThVPXk/food1.jpg"
                loading="lazy"
                alt="error"
              />
              <div className="facility-img-content">
                <h3>fruite</h3>
              </div>
            </div>
          </div>
          <div className="all-hotels-type facility-vegetable">
            <div className="facility-img-container">
              <img
                src="https://i.postimg.cc/Nffm6Rkk/food2.jpg"
                loading="lazy"
                alt="error"
              />
              <div className="facility-img-content">
                <h3>vegetable</h3>
              </div>
            </div>
          </div>
          <div className="all-hotels-type facility-grin">
            <div className="facility-img-container">
              <img
                src="https://i.postimg.cc/76ZwsPsd/food3.jpg"
                loading="lazy"
                alt="error"
              />
              <div className="facility-img-content">
                <h3>grin</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* foods section */}

      {/* review from the customer */}
      <section id="facility-testimonials">
        <h2 className="facility-testimonial-title">What Our Customers Say</h2>
        <div className="facility-testimonial-container facility-container">
          <div className="facility-testimonial-box">
            <div className="facility-customer-detail">
              <div className="facility-customer-photo">
                <img
                  src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg"
                  loading="lazy"
                  alt=""
                />
                <p className="facility-customer-name">Ross Lee</p>
              </div>
            </div>
            <div className="facility-star-rating">5 star</div>
            <p className="facility-testimonial-text">
              The hotel's mountain view was breathtaking! It was the perfect
              getaway for a peaceful retreat. The rooms were comfortable, the
              staff was friendly, and the food was delicious. Highly
              recommended!
            </p>
          </div>
          <div className="facility-testimonial-box">
            <div className="facility-customer-detail">
              <div className="facility-customer-photo">
                <img
                  src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                  loading="lazy"
                  alt=""
                />
                <p className="facility-customer-name">Amelia Watson</p>
              </div>
            </div>
            <div className="facility-star-rating">4.5 Star</div>
            <p className="facility-testimonial-text">
              The food was exceptional! Each dish was beautifully presented and
              bursting with flavor. The menu offered a great variety, and
              everything was cooked to perfection. A truly memorable dining
              experience.
            </p>
          </div>
          <div className="facility-testimonial-box">
            <div className="facility-customer-detail">
              <div className="facility-customer-photo">
                <img
                  src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg"
                  loading="lazy"
                  alt=""
                />
                <p className="facility-customer-name">Ben Roy</p>
              </div>
            </div>
            <div className="facility-star-rating">4 star</div>
            <p className="facility-testimonial-text">
              I recently stayed at the hotel and was impressed by the level of
              service. The staff went above and beyond to ensure my stay was
              comfortable and enjoyable. The amenities were top-notch, and I
              would definitely stay here again.
            </p>
          </div>
        </div>
      </section>
      {/* review from the customer */}
    </>
  );
}
