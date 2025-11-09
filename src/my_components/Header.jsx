import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#slidingNavbar" aria-controls="slidingNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse custom-sliding-menu " id="slidingNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-nav-links">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

