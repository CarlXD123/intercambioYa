import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "../template/Header";


function Landing() {
  return (
    <>
      <Header />
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white2 py-4">
        <p className="text-center px-5">
        ¡Descubre un mundo de oportunidades y encuentra tesoros ocultos en nuestra plataforma 
        de subastas e intercambios!<br></br>Tu próxima gran aventura comienza aquí.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/product" className="btn btn-primary" replace>
            Ver productos
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">Proxima subasta</h2>
      <div className="container pb-5 px-lg-5 text-center">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5 flex-row">
         <center>
         </center>
            <FeatureProduct />
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3" style={{color: "white"}}>Siguenos en</h5>
        <div className="d-flex justify-content-center">
          <a href="https://www.facebook.com/people/Intercambio-Ya/100093381273723/" className="me-3" style={{color: "white"}}>
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="https://www.instagram.com/intercambio.ya.pe/" style={{color: "white"}}>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@intercambioya" className="ms-3" style={{color: "white"}}>
            <FontAwesomeIcon icon={["fab", "tiktok"]} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/intercambio-ya-511a81278/?originalSubdomain=pe" className="ms-3" style={{color: "white"}}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
