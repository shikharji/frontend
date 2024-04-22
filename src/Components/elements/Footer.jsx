import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
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

            {/* <div className="social">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-twitter-square"></i>
              <i className="fa-brands fa-youtube-square"></i>
              <i className="fa-brands fa-whatsapp-square"></i>
            </div> */}
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
          <p>Copyright &copy; 2023 Parasnath Hill </p>
        </div>
      </footer>
    </>
  );
}
