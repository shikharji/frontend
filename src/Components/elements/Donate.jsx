import { Link } from "react-router-dom";

export default function Donate() {
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
