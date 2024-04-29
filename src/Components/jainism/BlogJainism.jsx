import { Link } from "react-router-dom";

export default function BlogJainism({ id, title, desc }) {
  return (
    <>
      <div className="Jain-blog-blog-card">
        <div className="Jain-blog-meta">
          <div
            className="Jain-blog-photo"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
            }}
          ></div>
        </div>
        <div className="Jain-blog-description">
          <h1>{title}</h1>
          <p>{desc}</p>
          <p className="Jain-blog-read-more">
            <Link to={`/blog-detail/${id}`}>Read More</Link>
          </p>
        </div>
      </div>
    </>
  );
}

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
