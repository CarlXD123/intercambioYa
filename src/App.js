import ProductDetail from "./products/detail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing";
import Logueo from "./login/Logueo";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Logueo />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/inicio" element={<Landing />} />
      </Routes>
  );
}

export default App;
