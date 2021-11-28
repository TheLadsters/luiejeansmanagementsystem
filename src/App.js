import Login from "./components/Login";
import LandingPage from "./pages/LandingPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
    </>
  )
}

export default App;
