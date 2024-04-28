import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './footer/footer.jsx';
import Nav from "./navbar/NavBar.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Product from "./Pages/Product.jsx";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";

function App(){

  return(
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/ram" element={<ShopCategory category="ram"/>}/>
          <Route path="/gpu" element={<ShopCategory category="gpu"/>}/>
          <Route path="/cpu" element={<ShopCategory category="cpu"/>}/>
          <Route path="/storage" element={<ShopCategory category="storage"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/signup" element={<LoginSignup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
  
}

export default App