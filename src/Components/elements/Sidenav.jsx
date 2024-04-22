import { Link } from "react-router-dom";
import "./Sidenav.css";

export default function Sidenav() {
  return (
    <>
      <nav className="Sidenav-wrapper">
        <Link to="/">
          <h1 className="Sidenav-title">Sri Shikharji</h1>
        </Link>
        <input id="checkbox2" type="checkbox" />
        <label className="toggle toggle2" for="checkbox2">
          <div id="nav-bar4" className="nav-bars"></div>
          <div id="nav-bar5" className="nav-bars"></div>
          <div id="nav-bar6" className="nav-bars"></div>
        </label>
        <ul className="Sidenav-menu">
          <li>
            <Link to="/shikharji">Shikharji</Link>
          </li>
          <li>
            <Link to="/jainism">Jainism</Link>
          </li>
          <li>
            <Link to="/tirthankara">Tirthankara</Link>
          </li>
          <li>
            <Link to="/temple">Temples</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
