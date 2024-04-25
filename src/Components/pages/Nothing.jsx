import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Nothing() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found - Shikharji</title>
        <meta
          name="description"
          content="Oops! The page you are looking for could not be found. Explore other parts of our site to discover more about Shikharji and Jainism."
        />
      </Helmet>

      <div id="Nothing-holder">
        <div className="Nothing-container">
          <section>
            <h1>
              We're Sorry,
              <br /> This Path Doesn't Lead to Any Temple
            </h1>
            <p>
              It seems like you've taken a path that doesn't exist or has been
              relocated.
            </p>
            <p>
              Don't worry, we won't make you climb an extra hill for your
              troubles. Instead, why not return to the{" "}
              <Link to="/">
                <strong> HOME PAGE</strong>
              </Link>{" "}
              and explore from there?
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
