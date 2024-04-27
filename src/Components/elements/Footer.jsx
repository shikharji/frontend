import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Donate />
      <footer id="footer-tag">
        <div className="row1 Footer-primary">
          <div className="column Footer-about">
            <h2>The Parasnath Hill</h2>

            <p>
              The parasnath hill is dedicated to the jain religion and the Holy
              sites of sikharji. Use this website to find information about
              Jainism, including its history, philosophy, temples, festivals,
              rituals and practices.
            </p>
          </div>

          <div className="column links">
            <h3>Explore</h3>

            <ul>
              <li>
                <Link to="shikharji">Shikharji</Link>
              </li>
              <li>
                <Link to="jainism">Jainism</Link>
              </li>
              <li>
                <Link to="tirthankara">Tirthankara</Link>
              </li>
              <li>
                <Link to="temple">Temples</Link>
              </li>
            </ul>
          </div>

          <div className="column links">
            <h3>About</h3>
            <ul>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
              <li>
                <Link to="community">Community</Link>
              </li>
              <li>
                <Link to="about">About us</Link>
              </li>
              <li>
                <Link to="support">Support</Link>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3>Newsletter</h3>
            <div>
              <input
                className="footer-input-email"
                type="email"
                placeholder="Enter Your Email..."
              />
              <button>Coming soon!</button>
            </div>
          </div>
        </div>

        <div className="row1 copyright">
          <div className="footer-menu">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="support">Support</Link>
            <Link to="explore">More...</Link>
          </div>
          <p>Copyright &copy; 2024 Parasnath Hill </p>
        </div>
      </footer>
    </>
  );
}

export function Donate() {
  return (
    <>
      <div id="Donate-wrapper">
        <div className="Donate-card">
          <div className="Donate-card__img-container">
            <img
              className="Donate-card__img"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI3Njk2NjY&ixlib=rb-4.0.3&q=80&w=400"
              alt="A man a camera"
            />
          </div>
          <div className="Donate-card__header">
            <h2 className="Donate-card__title">Support Our Work...</h2>
            <h3 className="Donate-card__subtitle">Help us make a difference</h3>
          </div>

          <div className="Donate-card__body Donate-flow">
            <p>Hey there! Your support can change lives.🙏</p>
            <p>
              Your donation will help us continue our mission of providing
              essential services to those in need. Every contribution, no matter
              how small, makes a difference in someone's life.
            </p>
            <Link to="/support" className="Donate-card__cta">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
