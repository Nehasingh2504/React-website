import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav class="navbar fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#slidingNavbar" aria-controls="slidingNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse custom-sliding-menu " id="slidingNavbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom-nav-links">
              <li class="nav-item">
                <Link class="nav-link active" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/services">Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

