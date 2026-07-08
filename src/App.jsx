import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { Loader } from "./components/common/Loader";

// Lazy-loaded route components
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/Pages/AboutUs/AboutUs"));
const FlowrapMachine = lazy(() => import("./components/Pages/Flowrap/FlowrapMachine"));
const RotaryMachine = lazy(() => import("./components/Pages/RotryMachine/RotaryMachine"));
const SnusPackingMachine = lazy(() => import("./components/Pages/Snus_Packing/SnusPackingMachine"));
const Products = lazy(() => import("./components/Pages/Products/Products"));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs').then(m => ({ default: m.ContactUs })));

function AppContent() {
  const location = useLocation();
  // Locomotive Scroll
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        smoothTouch: true,
        touchMultiplier: 1,
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-white">
      {location.pathname !== "/" && <Loader key={location.pathname} />}
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/flowrap-machine" element={<FlowrapMachine />} />
          <Route path="/rotary-machine" element={<RotaryMachine />} />
          <Route path="/snus-packing-machine" element={<SnusPackingMachine />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
