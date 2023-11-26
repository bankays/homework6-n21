import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth/Auth";
import Customers from "./pages/customers/Customers";
import Login from "./routes/login/Login";
import Signup from "./routes/signup/Signup";
import Product from "./routes/product/Product";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="customers" element={<Customers />} />
        <Route path="product-view/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
