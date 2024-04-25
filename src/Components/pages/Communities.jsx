import "./StylePages.css";
import { Helmet } from "react-helmet";

export default function Communities() {
  return (
    <>
      <Helmet>
        <title>Community - Shikharji</title>
        <meta
          name="description"
          content="Join our community at Shikharji and share your thoughts, experiences, and insights about Jainism, temples, and the pilgrimage site. Connect with like-minded individuals and explore the spiritual journey together."
        />
        <meta
          name="keywords"
          content="Shikharji, community, share, posts, feeds, Jainism, temples, pilgrimage, spiritual, connect, journey"
        />
      </Helmet>

      <Hero />
    </>
  );
}

export function Hero() {
  return (
    <>
      <header className="community-hero">
        <img
          src="https://assets.codepen.io/2585/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
          alt="a wooden table is viewed top down where it is covered in laptops, coffee, and cables, appearing to be a table for lots of productivity."
        />
        <div className="community-div">
          <h1>A community for jain peoples!</h1>
          <p>
            "Exciting news! Our community feature is coming soon. Stay tuned for
            updates!.
          </p>
        </div>
      </header>
    </>
  );
}
