import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Photo from './pages/Photo';
import ErrorPage from './pages/ErrorPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/variables.css';

function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/images/:id" element={<Photo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;