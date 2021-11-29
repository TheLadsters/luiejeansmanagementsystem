import Login from "./components/Login";
import LandingPage from "./pages/LandingPage";
import OrderHistory from "./pages/OrderHistory";
import Account from "./pages/Account";
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
    </Routes>
    </>
  )
}

export default App;
