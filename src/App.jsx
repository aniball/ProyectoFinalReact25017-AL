import { useState, React } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
import Carrito from './components/Carrito';
import Administracion from './pages/Administracion';
import RutaProtegida from './components/RutaProtegida';
import AppFooter from './components/AppFooter';
import About from './pages/About';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <Navigation />
    <div className="mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categoria/:categoria" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <RutaProtegida><Administracion /></RutaProtegida>
        } />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <AppFooter />
  </>
);

export default App;