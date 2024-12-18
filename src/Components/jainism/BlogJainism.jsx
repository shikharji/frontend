import { Link } from "react-router-dom";

export function BlogJainism2({ id, img, title, desc }) {
  return (
    <>
      <div className="BlogJainism2-card">
        {img ? (
          <img
            className="BlogJainism2-card__img"
            src={img}
            loading="lazy"
            alt={title}
          />
        ) : (
          <img
            className="BlogJainism2-card__img"
            src="https://cdn.pixabay.com/photo/2022/09/25/00/41/germany-7477388_960_720.jpg"
            loading="lazy"
            alt={title}
          />
        )}
        <div className="BlogJainism2-card__content">
          <h1 className="BlogJainism2-card__header">{title}</h1>
          <div className="BlogJainism2-card__text-wrapper">
            <p className="BlogJainism2-card__text">{desc}</p>
          </div>
          <Link to={`/jainism/${id}`} className="BlogJainism2-card__btn">
            Explore <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}
