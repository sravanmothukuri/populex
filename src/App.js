import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {/* ✅ Show Navbar only when loading is false */}
      {!isLoading && <Navbar />}

      {isLoading ? (
        <LoadingScreen textPosition="top" />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
