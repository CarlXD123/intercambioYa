import Image from "../../images/laptopcita.jpg";
import { Link } from "react-router-dom";

function RelatedProduct(props) {
  const price = 700;
  let percentOff;
  let offPrice = `${price}Ks`;

  if (props.percentOff && props.percentOff > 0) {
    percentOff = (
      <div
        className="badge bg-dim py-2 text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
       2 meses de uso
      </div>
    );

    offPrice = (
      <>
        <del>S/. {price}</del> S/. {price - (props.percentOff * price) / 100}
      </>
    );
  }

  return (
    <Link
      to="/products/1"
      className="col text-decoration-none"
      href="!#"
      replace
    >
      <div className="card shadow-sm">
        {percentOff}
        <img
          className="card-img-top bg-dark cover"
          height="200"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            Laptop Lenovo
          </h5>
          <p className="card-text text-center text-muted">Ver Detalles</p>
        </div>
      </div>
    </Link>
  );
}

export default RelatedProduct;
