import { Link } from "react-router-dom";

export default function FeatureHero({ title, desc, route, image }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="parall-container"
      >
        <h1>{title}</h1>
        <p>{desc}</p>
        <Link to={`/${route}`}>Explore</Link>
      </div>
    </>
  );
}
