import Image from "../images/channel.jpg";
import { Link } from "react-router-dom";

function ProductSub(props) {
  let percentOff;
  if (props.percentOff && props.percentOff > 0) {
    percentOff = (
      <div
        className="badge bg-dim py-2 text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        Por tiempo limitado
      </div>
    );

   
  }

  return (
    <div className="col">
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
            Perfume Chanel
          </h5>
         
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
                Probar suerte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSub;
