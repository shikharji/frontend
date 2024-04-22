import "./styles/Support.css";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <>
      <div className="Donation-container">
        <main>
          <div className="Donation-hero-section">
            <div className="Donation-hero-title">
              <h1>
                Support Us, <br />
                Transform Our Website
              </h1>
            </div>
            <div className="Donation-hero-description">
              <p>
                Help us enhance user experience and speed by upgrading our
                servers.
                <br />
                Your donation will directly impact the quality of our service.
              </p>
            </div>
            <div className="Donation-hero-cta">
              <button className="Donation-btn">
                <Link to="qr">Donate Now</Link>
              </button>
            </div>
          </div>
          <div className="Donation-box-container">
            <div className="Donation-box">
              <div className="Donation-top">
                <div className="Donation-box-content">
                  <h1>Empower Change</h1>
                  <p>
                    Your contribution can empower communities, protect the
                    environment, and support education.
                  </p>
                </div>
              </div>
              <div className="Donation-bottom">
                <Link to="qr" className="Donation-btn-sec">
                  Empower
                </Link>
              </div>
            </div>
            <div className="Donation-box">
              <div className="Donation-top">
                <div className="Donation-box-content">
                  <h1>Transform Lives</h1>
                  <p>
                    Your generosity can provide healthcare, education, and
                    essential resources to those in need.
                  </p>
                </div>
              </div>
              <div className="Donation-bottom">
                <Link to="qr" className="Donation-btn-sec">
                  Transform
                </Link>
              </div>
            </div>
            <div className="Donation-box">
              <div className="Donation-top">
                <div className="Donation-box-content">
                  <h1>Be the Change</h1>
                  <p>
                    Your support can provide relief, support, and opportunities
                    to those who need it most.
                  </p>
                </div>
              </div>
              <div className="Donation-bottom">
                <Link to="qr" className="Donation-btn-sec">
                  Change
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
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
            <h2 className="Donate-card__title">Support Our Cause</h2>
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
