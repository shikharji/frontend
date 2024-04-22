import "./StylePages.css";
import PageTitle from "../elements/PageTitle";

export default function Communities() {
  return (
    <>
      <PageTitle title="Community" />
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
