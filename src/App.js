import Login from "./components/Login";
import LandingPage from "./pages/LandingPage";
import OrderHistory from "./pages/OrderHistory";
import Account from "./pages/Account";
import Customer from "./pages/Customer";
import Staff from "./pages/Staff";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/account" element={<Account />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
    </>
  )
}

export default App;
