import "./StyleBlogs.css";
import { Link } from "react-router-dom";

export default function CardBlogs({ id, img, title, desc, category }) {
  let truncatedTitle = title ? title.split(" ").slice(0, 7).join(" ") : "";
  if (title && title.split(" ").length > 7) {
    truncatedTitle += " ...";
  }

  let truncatedDesc = desc ? desc.split(" ").slice(0, 35).join(" ") : "";
  if (desc && desc.split(" ").length > 35) {
    truncatedDesc += " ...";
  }

  const defaultImgUrl =
    "https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <>
      <div className="CardBlogs-card">
        <img
          className="CardBlogs-card-img"
          src={img || defaultImgUrl}
          alt="Coffee"
        />

        <div className="CardBlogs-card-body">
          <h4 className="CardBlogs-overline">{category}</h4>
          <h2 className="CardBlogs-card-title">{truncatedTitle}</h2>
          <p className="CardBlogs-card-subtitle">{truncatedDesc}</p>
        </div>
        <Link to={`/blog-detail/${id}`}>
          <button className="CardBlogs-btn">Read more</button>
        </Link>
      </div>
    </>
  );
}
