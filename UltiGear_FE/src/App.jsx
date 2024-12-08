import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Regist from "./pages/Regist";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import EditProfile from "./pages/EditProfile";
import Product from "./pages/Product";
import PaymentMethod from "./pages/PaymentMethod";
import Dashboard from "./pages/adminSection/Dashboard"; 
import CrudProduct from "./pages/adminSection/CrudProduct";
import AddProduct from "./pages/adminSection/AddProduct";
import EditProduct from "./pages/adminSection/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/crudproduct" element={<CrudProduct />} /> 
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />  
      </Routes>
    </Router>
  );
}

export default App;
