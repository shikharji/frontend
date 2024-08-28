import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../elements/Loading";
import { Helmet } from "react-helmet";
import apiUrl from "../utils/GetApiUrl";

export default function DetailTirthankara() {
  const id = useParams().id;
  const [tirthankara, setTirthankaras] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTirthankaraDetail = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/tirthankar/${id}`);
        console.log("Data:", data);
        if (data?.tirthankar) {
          setTirthankaras([data?.tirthankar]);
          setLoading(false);
          // document.title = `${data?.tirthankar?.name} - Tirthankaras`;
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getTirthankaraDetail();
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{`${
          tirthankara.length > 0 ? tirthankara[0].name : ""
        } Tirthankara - Jainism`}</title>
        <meta
          name="description"
          content={`Learn about the life, teachings, and significance of Tirthankara ${tirthankara[0]?.name}. Explore the spiritual journey and teachings of this enlightened spiritual leader in Jainism.`}
        />
        <meta
          name="keywords"
          content={`Tirthankara, Jainism, ${tirthankara[0]?.name}, spiritual leader, teachings, life, significance`}
        />
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <>
          {tirthankara.map((t) => (
            <>
              <TitlesHero rank={t.rank} name={t.name} />
              <KeyInfo additionalInfo={t.additionalInfo} />
              <AlsoKnownAs alsoKnownAs={t.alsoKnownAs} />{" "}
              <Teaching teachings={t.teachings} />
              <Points points={t.points} />
              <LifeEvents lifeEvents={t.lifeEvents} />
              <Articles articles={t.articles} />
            </>
          ))}
        </>
      )}
    </>
  );
}

export function TitlesHero({ rank, name }) {
  function getRankSuffix(rank) {
    if (rank === 1) {
      return "st";
    } else if (rank === 2) {
      return "nd";
    } else if (rank === 3) {
      return "rd";
    } else if (rank >= 4 && rank <= 20) {
      return "th";
    } else if (rank >= 21 && rank <= 24) {
      return "st";
    } else {
      return "";
    }
  }
  return (
    <>
      <div id="parallax-world">
        <section>
          <div className="parallax-world-title">
            <h3>
              {rank}'{getRankSuffix(rank)} Tirthankar
            </h3>
            <h1>on Jainism</h1>
          </div>
        </section>
      </div>
      <div id="parallax-world-of-ugg">
        <section>
          <div
            style={{
              backgroundImage: `url("https://cdn.pixabay.com/photo/2021/11/05/05/52/mahavira-6770365_1280.jpg")`,
            }}
            className="parallax-one"
          >
            <h2>{name}</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export function KeyInfo({ additionalInfo }) {
  return (
    <>
      {" "}
      <h1 className="center-title">Additional Info:</h1>
      <ul id="key-info-ul">
        {" "}
        {Object.entries(additionalInfo).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export function Teaching({ teachings }) {
  const getTeachingDescription = (teaching) => {
    switch (teaching.toLowerCase().trim()) {
      case "non-violence":
        return "The principle of non-violence is foundational in Jainism. Tirthankaras taught that one should avoid causing harm to any living being, both physically and mentally.";
      case "truthfulness":
        return "Tirthankaras emphasized the importance of speaking the truth at all times. Truthfulness is seen as a key virtue in Jainism.";
      case "non-stealing":
        return "Jain teachings emphasize the principle of non-stealing, which includes not taking what is not given, as well as not coveting or desiring what belongs to others.";
      case "celibacy":
        return "Jainism emphasizes the importance of practicing chastity and restraint in one's sexual conduct.";
      case "liberation":
        return "Tirthankaras taught that the ultimate goal of life is to attain liberation (moksha) from the cycle of birth, death, and rebirth (samsara) by following the path of right belief, right knowledge, and right conduct.";
      case "non-attachment":
        return "Non-attachment, or aparigraha, is a key teaching in Jainism. It emphasizes minimizing possessions and attachments to material things, practicing non-possessiveness and detachment.";
      case "moksha":
        return "Tirthankaras taught that the ultimate goal of life is to attain liberation (moksha) from the cycle of birth, death, and rebirth (samsara) by following the path of right belief, right knowledge, and right conduct.";
      case "right conduct":
        return "Right conduct involves living ethically and morally, following the principles of non-violence, truthfulness, non-stealing, chastity, and non-attachment.";
      case "asceticism":
        return "Asceticism is a fundamental practice in Jainism, emphasizing self-discipline and renunciation of worldly pleasures to achieve spiritual goals.";
      case "detachment":
        return "Detachment, or vairagya, is a key principle in Jainism, encouraging individuals to detach themselves from material desires and attachments.";
      case "purity":
        return "Purity, or saucha, is emphasized in Jainism, both in physical cleanliness and purity of thoughts and intentions.";
      case "compassion":
        return "Compassion, or karuna, is a central virtue in Jainism, promoting kindness and empathy towards all living beings.";
      case "wisdom":
        return "Wisdom, or prajna, is highly valued in Jainism, encouraging individuals to seek knowledge and understanding of the true nature of reality.";
      case "self-control":
        return "Self-control, or damah, is essential in Jainism, teaching individuals to restrain their desires and impulses.";
      case "right-living":
        return "Right living involves leading a life in accordance with the principles of Jainism, including non-violence, truthfulness, non-stealing, celibacy, and non-attachment.";
      case "forgiveness":
        return "Forgiveness, or kshama, is a key virtue in Jainism, teaching individuals to forgive others and let go of anger and resentment.";
      case "right-knowledge":
        return "Right knowledge, or samyagjnana, is crucial in Jainism, leading to a deeper understanding of the true nature of existence and the path to liberation.";
      default:
        return "not getting any description...";
    }
  };

  return (
    <>
      <div className="Teaching-header">
        <h1>Teachings of Tirthankara</h1>

        <p>
          "Embrace the Path of Non-Violence, Truth, and Spiritual Enlightenment:
          The Eternal Teachings of the Tirthankaras."
        </p>
      </div>
      <div className="Teaching-row1-container">
        {teachings.map((teaching) => (
          <>
            <div key={teaching} className="Teaching-box">
              <h2>{teaching}</h2>
              <p>{getTeachingDescription(teaching)}</p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                loading="lazy"
                alt="lost"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export function AlsoKnownAs({ alsoKnownAs }) {
  return (
    <>
      {" "}
      <h2 className="center-title">Also Known As:</h2>
      <ul id="also-known-as-ul">
        {alsoKnownAs.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export function Points({ points }) {
  return (
    <>
      <h1 className="center-title">Important points to remember:</h1>
      <div className="Points-container my-container">
        {points.map((point, index) => (
          <main className="Points-card">
            <section key={index} className="Points-card__text">
              <p>{point}</p>
            </section>
          </main>
        ))}
      </div>
    </>
  );
}
export function Articles({ articles }) {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="Articles-container">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
}
export function LifeEvents({ lifeEvents }) {
  return (
    <>
      <h2 className="center-title">Life Events:</h2>
      <div className="LifeEvents-row">
        {lifeEvents.map((event, index) => (
          <div>
            <div key={index} className="LifeEvents-card">
              <h4>{event.event}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
