// import "./StyleTirthankara.css";
import { Link } from "react-router-dom";

export default function CardTirthankara({
  id,
  rank,
  name,
  symbol,
  birthPlace,
  deathplace,
}) {
  return (
    <>
      <ul className="card3-container">
        <li className="card3">
          <img
            src="https://wallpapercave.com/wp/wp3639691.jpg"
            loading="lazy"
            alt="Philadelphia skyline."
            className="card__img"
          />
          <h1>
            {rank}. {name}
          </h1>
          <ul className="card3-ul">
            <li>Symbol: {symbol}</li>
            <li>Birth place: {birthPlace}</li>
            <li>Nirvana : {deathplace}</li>
          </ul>

          <Link to={`/tirthankara-detail/${id}`}>Learn More →</Link>
        </li>
      </ul>
    </>
  );
}
