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

  const data = [
    {
      title: "Nature's Beauty Unveiled",
      desc: "Explore the mesmerizing beauty of nature at Parasnath Hill. From lush green forests to majestic waterfalls, immerse yourself in the tranquility of the natural world.",
      img: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "",
    },
    {
      title: "Wildlife Encounters",
      desc: "Get up close and personal with the diverse wildlife of Parasnath Hill. From rare species of birds to exotic animals, experience the wonders of the natural world.",
      img: "https://cdn.pixabay.com/photo/2021/06/24/12/27/elephants-6361065_1280.jpg",
      link: "",
    },
    {
      title: "Rare Plant Species",
      desc: "Parasnath Hill is home to several rare and endangered plant species, including the likes of Madhuca longifolia and Holarrhena antidysenterica.",
      img: "https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "",
    },
    {
      title: "Exotic Birds",
      desc: "Parasnath Hill is a birdwatcher's paradise, with over 100 species of birds documented, including the likes of the Indian Peafowl, Red- headed Vulture, and the majestic Changeable Hawk Eagle.",
      img: "https://cdn.pixabay.com/photo/2023/03/06/08/15/humming-bird-7832894_1280.jpg",
      link: "",
    },
  ];
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
      </header>

      <div className="WildlifeCard-grid">
        {data.map((item, index) => (
          <>
            <div className="WildlifeCard-card" key={index}>
              <img src={item.img} loading="lazy" alt="" />
              <div>
                <h3>{item.title}</h3>
                <hr></hr>
                <p>{item.desc}</p>
                <Link to="/">KNOW MORE</Link>
              </div>
            </div>
          </>
        ))}
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
      price: 250,
      img: "https://cdn.pixabay.com/photo/2022/11/02/19/24/hotel-7565884_1280.jpg",
    },
    {
      name: "Taran Bhavan",
      rating: 3.7,
      price: 350,
      img: "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_1280.jpg",
    },
    {
      name: "Nirmala Niwas",
      rating: 3.7,
      price: 450,
      img: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_1280.jpg",
    },
    {
      name: "Dharm Mangal Vidyapith",
      rating: 3.7,
      price: 550,
      img: "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_1280.jpg",
    },
  ];

  const RatingList = [
    {
      name: "Aman singh",
      rating: 5,
      img: "https://i.postimg.cc/5Nrw360Y/male-photo1.jpg",
      review:
        "The hotel's mountain view was breathtaking! It was the perfect getaway for a peaceful retreat. The rooms were comfortable, the staff was friendly, and the food was delicious. Highly recommended!",
    },
    {
      name: "Manish pandey",
      rating: 4,
      img: "https://i.postimg.cc/sxd2xCD2/female-photo1.jpg",
      review:
        "The food was exceptional! Each dish was beautifully presented and bursting with flavor. The menu offered a great variety, and everything was cooked to perfection. A truly memorable dining experience.",
    },
    {
      name: "Ashutosh ranjan",
      rating: 4.5,
      img: "https://i.postimg.cc/fy90qvkV/male-photo3.jpg",
      review:
        "I recently stayed at the hotel and was impressed by the level of service. The staff went above and beyond to ensure my stay was comfortable and enjoyable. The amenities were top-notch, and I would definitely stay here again.",
    },
  ];

  return (
    <>
      {/* hero */}
      <section className="facility-showcase-area">
        <div className="facility-showcase-container">
          <h1>Hotel & Facility</h1>

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

      <section className="facility-about">
        <div className="facility-about-wrapper">
          <div className="facility-about-text">
            <p>About Us</p>
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
              src="https://images.pexels.com/photos/7820324/pexels-photo-7820324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              loading="lazy"
              alt="Reception"
            />
          </div>
        </div>
      </section>
      {/* hero */}

      {/* all hotels */}
      <section id="all-hotels-menu">
        <h2 className="all-hotels-menu-heading">Explore All hotels</h2>
        <div className="all-hotels-menu-container">
          {HotelsList.map((i) => {
            const emailSubject = `Hotel Booking Request: ${i.name}`;
            const emailBody = `Hello,\n\nI am interested in booking the hotel "${i.name}" priced at ₹${i.price}/day.\n\nPlease let me know the availability.\n\nThank you!`;
            return (
              <>
                <div className="all-hotels-menu-item">
                  <div className="all-hotels-img">
                    <img src={i.img} loading="lazy" alt="Lost" />
                  </div>
                  <div className="all-hotels-description">
                    <h2 className="all-hotels-titile">{i.name}</h2>
                    <p>Rating: {i.rating}</p>
                    <p className="all-hotels-price">
                      Price: &#8377; {i.price}/day
                    </p>
                    <a
                      href={`mailto:astroman6569@gmail.com?subject=${encodeURIComponent(
                        emailSubject
                      )}&body=${encodeURIComponent(emailBody)}`}
                    >
                      Know more..
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* all hotels */}

      {/* review from the customer */}
      <section id="facility-testimonials">
        <h2 className="facility-testimonial-title">What Our Customers Say</h2>
        <div className="facility-testimonial-container">
          {RatingList.map((i) => (
            <div className="facility-testimonial-box" key={i.id}>
              <img src={i.img} loading="lazy" alt={i.name} />
              <p>{i.name}</p>
              <p>{"⭐".repeat(i.rating)}</p>
              <p>{i.review}</p>
            </div>
          ))}
        </div>
      </section>
      {/* review from the customer */}
    </>
  );
}
