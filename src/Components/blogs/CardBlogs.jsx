import "./StyleBlogs.css";
import { Link } from "react-router-dom";

export default function CardBlogs({ id, title, desc, category }) {
  let truncatedTitle = title ? title.split(" ").slice(0, 7).join(" ") : "";
  if (title && title.split(" ").length > 7) {
    truncatedTitle += " ...";
  }

  let truncatedDesc = desc ? desc.split(" ").slice(0, 35).join(" ") : "";
  if (desc && desc.split(" ").length > 35) {
    truncatedDesc += " ...";
  }
  return (
    <>
      <div class="CardBlogs-card">
        <img
          class="CardBlogs-card-img"
          src="https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Coffee"
        />

        <div class="CardBlogs-card-body">
          <h4 class="CardBlogs-overline">{category}</h4>
          <h2 class="CardBlogs-card-title">{truncatedTitle}</h2>
          <p class="CardBlogs-card-subtitle">{truncatedDesc}</p>
        </div>
        <Link to={`/blog-detail/${id}`}>
          <button class="CardBlogs-btn">Read more</button>
        </Link>
      </div>
    </>
  );
}
