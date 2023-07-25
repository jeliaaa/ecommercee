import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import AboutUs from "./pages/about us/AboutUs";
import BestSellers from "./pages/bestsellers/BestSellers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import HelpPage from "./pages/help/HelpPage";
import Shop from "./pages/shop/Shop";
import Single from "./components/single/Single";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/help" element={<HelpPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/single/:id" element={<Single id={/:id/}/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
