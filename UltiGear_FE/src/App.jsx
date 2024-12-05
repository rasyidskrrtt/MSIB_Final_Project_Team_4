import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Regist from "./pages/Regist";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import PaymentMethod from "./pages/PaymentMethod";
import Dashboard from "./pages/adminSection/Dashboard"; 

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
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/product" element={<Product />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
