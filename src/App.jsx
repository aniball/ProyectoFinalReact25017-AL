import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductsCRUD from "./pages/ProductsCRUD";
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
import Carrito from './components/Carrito';
import RutaProtegida from './components/RutaProtegida';
import AppFooter from './components/AppFooter';
import About from './pages/About';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navigation />
    <main className="flex flex-col max-w-7xl gap-2 m-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categoria/:categoria" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin/productos" element={<ProductsCRUD />} /> */}
        <Route path="/admin" element={
          <RutaProtegida>
              <ProductsCRUD />
          </RutaProtegida>
        } />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
    <AppFooter />
  </div>
);

export default App;