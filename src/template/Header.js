import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myImage from "../images/WhatsApp Image 2023-07-02 at 13.04.41.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {

  const [openedDrawer, setOpenedDrawer] = useState(false)

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/inicio" onClick={changeNav}>
          <img src={myImage} alt="My Awesome Logo" className="ms-1" style={{ width: "45px", height:"56px" }} />
            <span className="ms-2 h5 shop-text">Intercambio Ya</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                
              </li>
            </ul>
            <button type="button" className="btn btn-outline-dark">
            <FontAwesomeIcon icon={["fas", "gift"]} className="shop-text"/>
            <span className="ms-3 badge rounded-pill bg-dark">Trueque</span>
            </button>
            <button type="button" className="btn btn-outline-dark">
            <FontAwesomeIcon icon={["fas", "gavel"]} className="shop-text"/>
            <span className="ms-3 badge rounded-pill bg-dark">Subastas</span>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} className="shop-text"/>
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  href="!#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={["fas", "user-alt"]} className="bg-dark2" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Log out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
            <FontAwesomeIcon icon={["fas", "gift"]} className="shop-text"/>
            <span className="ms-3 badge rounded-pill bg-dark">Trueque</span>
            </button>
            <button type="button" className="btn btn-outline-dark">
            <FontAwesomeIcon icon={["fas", "gavel"]} className="shop-text"/>
            <span className="ms-3 badge rounded-pill bg-dark">Subastas</span>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} className="shop-text"/>
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
