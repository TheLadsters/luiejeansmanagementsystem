import Login from "./components/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import OrderHistory from "./pages/OrderHistory";
import OrderStatus from "./pages/OrderStatus";
import Account from "./pages/Account";
import Customer from "./pages/Customer";
import Staff from "./pages/Staff";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './components/ProfilePage.css';
import Footer from "./components/Footer"

const App = () => {
  return(
   <div className="page-container">
   <div className="content-wrap">
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/order-status" element={<OrderStatus />} />
      <Route path="/account" element={<Account />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
    </div>

    <Footer />
    
    </div>
  
  )
}

export default App;
