import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, SingleProduct, Contact, Error, About, Listings } from "./pages";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="listing" element={<Listings />} />
        <Route path="contact" element={<Contact />} />
        <Route path="listing/:id" element={<SingleProduct />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
