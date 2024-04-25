import { Link } from "react-router-dom";

export default function CardTemple({ name, id, img, description, location }) {
  // Function to truncate the description
  const truncateDescription = (text, limit) => {
    if (text) {
      const words = text.split(" ");
      if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
      }
      return text;
    }
    return "";
  };

  // Truncate the description to 30 words
  const truncatedDescription = truncateDescription(description, 30);
  return (
    <>
      <div className="RealTempleCard-container">
        <div className="RealTempleCard-box">
          <div
            className="RealTempleCard-imagewrap"
            style={{
              backgroundImage: `url("${
                img
                  ? img
                  : "https://www.schwarzwaldcamp.com/assets/images/hero.png"
              }")`,
            }}
          ></div>
          <div className="RealTempleCard-box-text">
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>{truncatedDescription}</p>
            <Link to={`/temple-detail/${id}`}>
              <button className="animated-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">E X P L O R E</span>
                <span className="circle"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
