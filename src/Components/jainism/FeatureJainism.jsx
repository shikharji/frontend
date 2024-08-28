import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BlogJainism2 } from "./BlogJainism";
import Loading from "../elements/Loading";
import apiUrl from "../utils/GetApiUrl";

const JainismItems = [
  {
    title: "cosmology",
    img: "https://cdn.pixabay.com/photo/2023/04/24/21/25/ai-generated-7949036_960_720.jpg",
    desc: "Jain cosmology portrays the universe as eternal, divided into three realms—upper, middle, and lower—each with varied inhabitants. It cycles through growth and decline, emphasizing its vastness and infinite nature.",
  },
  {
    title: "art",
    img: "https://plus.unsplash.com/premium_photo-1697730378543-704e6adb5285?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Jain art is a diverse and rich tradition that spans centuries. It is focus on non-violence, its use of symbolism, and its intricate craftsmanship. Jain art can be found in a variety of forms, including sculpture, painting, and architecture.",
  },
  {
    title: "principle",
    img: "https://images.unsplash.com/photo-1592070104256-1417ea238615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Jainism is a religion that emphasizes non-violence, non-attachment, and purity. Its five main principles are ahimsa (non-violence), satya (truth), asteya (not stealing), brahmacharya (chastity), and aparigraha (non-possession).",
  },
  {
    title: "practice",
    img: "https://images.unsplash.com/photo-1590998743997-368c04b78aa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Jainism is a religion that emphasizes non-violence, vegetarianism, and respect for all living things. Jains believe that the path to enlightenment is through spiritual purity and detachment from the material world.",
  },
  {
    title: "philosophy",
    img: "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Jainism is a transtheistic religion that emphasizes non-violence, non-attachment, and non-absolutism. It teaches that the soul is eternal and can achieve liberation from the cycle of rebirth through right conduct, right knowledge, and right faith.",
  },

  {
    title: "texts",
    img: "https://cdn.pixabay.com/photo/2019/09/30/14/29/books-4515917_1280.jpg",
    desc: "Jain texts offer deep insights into existence, morality, and liberation. They include the Agamas, teachings of Lord Mahavira, and commentaries. These texts emphasize non-violence and self-discipline, guiding followers to virtuous living.",
  },
];

export default function FeatureJainism() {
  return (
    <>
      <div className="flex-wrap ">
        {JainismItems.map((j) => {
          return <JainFeatureCard title={j.title} desc={j.desc} />;
        })}
      </div>
    </>
  );
}

export function JainFeatureCard({ title, desc }) {
  return (
    <>
      <div className="JainismFeatureCard-card">
        <p className="JainismFeatureCard-card-title">{title}</p>
        <p className="JainismFeatureCard-small-desc">{desc}</p>
        <Link to={`/jainism/${title}`}>
          <button className="JainFeatureCard-button">
            <span className="JainFeatureCard-button-content">Know More.. </span>
          </button>
        </Link>

        <div className="JainismFeatureCard-go-corner">
          <div className="JainismFeatureCard-go-arrow">→</div>
        </div>
      </div>
    </>
  );
}

export function Hero({ title, imageUrl, desc1, desc2 }) {
  return (
    <>
      <section className="Custom-block">
        <figure className="item-parallax-media">
          <img src={imageUrl} alt={title} />
        </figure>
        <div className="item-parallax-content flex-container">
          <div className="landing-content centered-content">
            <h1 className="head-large">
              {title} in <br />
              Jain community
            </h1>
          </div>
        </div>
      </section>

      <section className="Custom-block section-intro">
        <div className="item-parallax-content flex-container">
          <div className="centered-content overview-head">
            <h2 className="head-small head-centered">Overview</h2>
            <p>{desc1}</p>
            <p>{desc2}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function Cosmology() {
  const [cosmology, setCosmology] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Cosmology in jainism";
    const fetchCosmology = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jainism/cosmology`);
        setCosmology(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cosmology:", error);
        setLoading(false);
      }
    };

    fetchCosmology();
  }, []);

  const artItem = JainismItems.find(
    (item) => item.title.toLowerCase() === "cosmology"
  );
  return (
    <>
      <Hero
        title="Cosmology"
        imageUrl={artItem.img}
        desc1="Jain cosmology elucidates the eternal, uncreated nature of the universe, devoid of a beginning or end. It delineates three realms—upper, middle, and lower—each inhabited by distinct beings. This cosmology posits a perpetual cycle of growth and decline in the universe, emphasizing its vast, boundless nature."
        desc2="Time in Jain cosmology is seen as infinite and cyclical, divided into ascending and descending cycles. During the ascending cycle, the world progresses towards prosperity, while in the descending cycle, it declines towards destruction. These cycles are divided into smaller epochs, each characterized by periods of prosperity and decline. Jain cosmology emphasizes the transient nature of the universe and the importance of attaining liberation from the cycle of birth, death, and rebirth."
      />{" "}
      {loading ? (
        <Loading />
      ) : (
        <div id="BlogJainism2">
          {cosmology &&
            cosmology.map((c) => (
              <BlogJainism2
                id={c._id}
                img={c.img}
                title={c.title}
                desc={c.introduction}
              />
            ))}
        </div>
      )}
    </>
  );
}

export function Art() {
  const [art, setArt] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Art in jainism";
    const fetchArt = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jainism/art`);
        setArt(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching art:", error);
        setLoading(false);
      }
    };

    fetchArt();
  }, []);

  const artItem = JainismItems.find(
    (item) => item.title.toLowerCase() === "art"
  );

  return (
    <>
      <Hero
        title="Art"
        imageUrl={artItem.img}
        desc1="Jain art depicts Tirthankaras, Jain spiritual teachers, with intricate and symbolic designs, often without clothing or ornaments to symbolize detachment. Temples are adorned with sculptures and paintings illustrating Jain teachings, serving as educational tools and objects of devotion."
        desc2="Jain art emphasizes non-violence and compassion, depicting nature and animals with care. Manuscripts and paintings showcase lush landscapes and diverse flora and fauna, reflecting the Jain belief in the sanctity of all life forms."
      />

      {loading ? (
        <Loading />
      ) : (
        <div id="BlogJainism2">
          {art &&
            art.map((a) => (
              <BlogJainism2
                id={a._id}
                img={a.img}
                title={a.title}
                desc={a.introduction}
              />
            ))}
        </div>
      )}
    </>
  );
}

export function Practice() {
  const [practice, setPractice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Practice in jainism";
    const fetchPractice = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jainism/practice`);
        setPractice(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching practice:", error);
        setLoading(false);
      }
    };

    fetchPractice();
  }, []);

  const artItem = JainismItems.find(
    (item) => item.title.toLowerCase() === "practice"
  );
  return (
    <>
      <Hero
        title="Practice"
        imageUrl={artItem.img}
        desc1="Jain practice centers on non-violence (ahimsa), the cornerstone of Jain ethics, extending compassion to all living beings. This principle guides dietary choices, with many Jains adhering to a strict vegetarian diet. Fasting (upvas) is also common, especially during religious festivals and holy days, as a means of spiritual purification and self-discipline."
        desc2="Jain practice includes meditation (dhyana) and prayer (prarthana) to cultivate inner peace and spiritual growth. Pilgrimage (tirtha yatra) to sacred sites, particularly to the Five Great Vows of Jainism, is a significant practice for many Jains. Additionally, Jains engage in acts of charity (dana) and community service (seva) to promote social welfare and reduce suffering."
      />

      {loading ? (
        <Loading />
      ) : (
        <div id="BlogJainism2">
          {practice &&
            practice.map((p) => (
              <BlogJainism2
                id={p._id}
                img={p.img}
                title={p.title}
                desc={p.introduction}
              />
            ))}
        </div>
      )}
    </>
  );
}

export function Philosophy() {
  const [philosophy, setPhilosophy] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Philosophy in jainism";
    const fetchPhilosophy = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jainism/philosophy`);
        setPhilosophy(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching philosophy:", error);
        setLoading(false);
      }
    };

    fetchPhilosophy();
  }, []);

  const artItem = JainismItems.find(
    (item) => item.title.toLowerCase() === "philosophy"
  );
  return (
    <>
      <Hero
        title="Philosophy"
        imageUrl={artItem.img}
        desc1="Jain philosophy emphasizes non-violence (ahimsa), which extends beyond physical harm to include mental and emotional harm. It advocates for compassion (anekantavada), the idea that truth and reality are complex and multifaceted, and that no single viewpoint can capture the entirety of truth. This philosophy guides Jain practices, such as vegetarianism and careful consideration of one's actions to minimize harm to all living beings."
        desc2="Central to Jain philosophy is the concept of non-possessiveness (aparigraha), which teaches detachment from material possessions and the ego. Jains believe in the transmigration of souls (samsara) and seek to liberate themselves from this cycle through spiritual development and ethical living. This philosophy is reflected in Jain art, which portrays the simplicity and reverence for life that are core principles of Jainism."
      />

      {loading ? (
        <Loading />
      ) : (
        <div id="BlogJainism2">
          {philosophy &&
            philosophy.map((p) => (
              <BlogJainism2
                id={p._id}
                img={p.img}
                title={p.title}
                desc={p.introduction}
              />
            ))}
        </div>
      )}
    </>
  );
}

export function Principle() {
  const [principles, setPrinciples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Principle in jainism";
    const fetchPrinciples = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jainism/principle`);
        setPrinciples(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching principles:", error);
        setLoading(false);
      }
    };

    fetchPrinciples();
  }, []);

  const artItem = JainismItems.find(
    (item) => item.title.toLowerCase() === "principle"
  );

  return (
    <>
      <Hero
        title="Principle"
        imageUrl={artItem.img}
        desc1="Jainism, an ancient Indian religion, emphasizes non-violence (ahimsa), truth (satya), non-stealing (asteya), celibacy (brahmacharya), and non-possessiveness (aparigraha) as its five main principles. These principles, collectively known as the five vows or Mahavratas, guide Jain followers in leading a virtuous life."
        desc2="Jainism also stresses the importance of non-attachment to material possessions and the practice of compassion towards all living beings. This emphasis on non-violence extends to the Jain diet, which typically excludes root vegetables and certain other foods to minimize harm to living organisms. Jain teachings advocate for spiritual development through self-discipline, meditation, and the pursuit of knowledge and enlightenment."
      />

      {loading ? (
        <Loading />
      ) : (
        <div id="BlogJainism2">
          {principles &&
            principles.map((p) => (
              <BlogJainism2
                id={p._id}
                img={p.img}
                title={p.title}
                desc={p.introduction}
              />
            ))}
        </div>
      )}
    </>
  );
}

export function Texts() {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Texts in jainism";
    const fetchTexts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jainism/texts`);
        setTexts(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching texts:", error);
        setLoading(false);
      }
    };

    fetchTexts();
  }, []);

  const artItem = JainismItems.find(
    (item) => item.title.toLowerCase() === "texts"
  );
  return (
    <>
      <Hero
        title="Texts"
        imageUrl={artItem.img}
        desc1="
        Jain texts are foundational to Jain philosophy, offering profound insights into existence, morality, and liberation. They include the Agamas, teachings of Lord Mahavira, and commentaries by Jain scholars. Emphasizing non-violence and self-discipline, they guide followers toward a virtuous life."
        desc2="These texts delve into Jain rituals, ethics, and cosmology, providing a comprehensive guide for followers. They are revered for their depth and wisdom, serving as a source of inspiration and guidance for those seeking spiritual fulfillment."
      />

      {loading ? (
        <Loading />
      ) : (
        <div id="BlogJainism2">
          {texts &&
            texts.map((text) => (
              <BlogJainism2
                id={text._id}
                img={text.img}
                title={text.title}
                desc={text.introduction}
              />
            ))}
        </div>
      )}
    </>
  );
}
