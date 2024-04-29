import React from "react";
import "./StyleTirthankara.css";
import { Link } from "react-router-dom";

export default function CardTirthankara({
  id,
  rank,
  name,
  symbol,
  birthPlace,
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque
            deleniti nobis blanditiis omnis, aliquam laborum at nulla voluptas
            officiis!
          </p>
          <ul className="card3-ul">
            <li>Symbol: {symbol}</li>
            <li>Birth place: {birthPlace}</li>
          </ul>

          <Link to={`/tirthankara-detail/${id}`} target="_blank">
            Learn More →
          </Link>
        </li>
      </ul>
    </>
  );
}
