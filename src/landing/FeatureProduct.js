import Image from "../images/882622942_1.jpg";

function FeatureProduct() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Laptop Gamer ASUS ROG Strix G15 AMD Ryzen 9</h5>
          <p className="card-text text-center text-muted">Semi Nuevo</p>
          
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
