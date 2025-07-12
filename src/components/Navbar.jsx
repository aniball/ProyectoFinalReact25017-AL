import React,  { useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import logo from '../assets/athos-logo.png'; 
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "flowbite-react";


const categorias = [
  { id: 'electronics', name: 'Electrónica' },
  { id: 'jewelery', name: 'Joyería' },
  { id: "men's clothing", name: 'Ropa de Hombre' },
  { id: "women's clothing", name: 'Ropa de Mujer' },
];


const Navigation = () =>  {

  const { user, isAuth, logout } = useAuth(); 
  const navigate = useNavigate(); 
  const cerrarSesion = () => {
    logout();
    navigate('/');
  };
  const { carrito } = useContext(CarritoContext);
  const totalProductos = carrito.reduce((acc, product) => acc + product.cantidad, 0);

  return (    
  <Navbar fluid rounded className="bg-white shadow-md border-b border-gray-100 py-4 mb-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <NavbarBrand as={Link} to="/" className="flex items-center gap-2">
        <img src={logo} alt="Athos Shop Logo" className="h-14" />
        <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">Athos Shop</span>
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-800 dark:text-gray-100 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
          }
        >
          Home
        </NavLink>

        {/* Dropdown de Categorías */}
        <Dropdown
          label="Categorías"
          renderTrigger={() => (
            <span className="text-gray-800 dark:text-gray-100 font-medium cursor-pointer flex items-center gap-1">
              Categorías
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          )}
          inline
        >
          {categorias.map(cat => (
            <DropdownItem key={cat.id}>
              <NavLink
                to={`/categoria/${encodeURIComponent(cat.id)}`}
                className={({ isActive }) =>
                  `block px-2 py-1 text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-800 dark:text-gray-100'}`
                }
              >
                {cat.name}
              </NavLink>              
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Solo si está autenticado */}
        {isAuth && user === "admin" && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-100 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
              }
            >
              Productos CRUD
            </NavLink>
        )}

        {/* Login o Logout */}
      <div className="ml-auto">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
            <UserIcon className="w-5 h-5" />
            Hola, {isAuth ? user : "visitante"}
          </span>

          {!isAuth ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-100 font-medium ${
                  isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'
                }`
              }
            >
              Iniciar Sesión
            </NavLink>
          ) : (
            <NavLink
              to="/"
              onClick={cerrarSesion}
              className={({ isActive }) =>
                `text-gray-800 dark:text-gray-100 font-medium ${
                  isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'
                }`
              }
            >
              Cerrar sesión
            </NavLink>
          )}
        </div>
      </div>
     

      <NavLink
        to="/carrito"
        className={({ isActive }) =>
          `text-gray-800 dark:text-gray-100 flex items-center gap-1 font-medium relative ${
            isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'
          }`
        }
      >
        {/* Ícono con badge */}
        <div className="relative">
          <FaShoppingCart className="h-5 w-5" />
          {totalProductos > 0 && (
            <Badge
              color="red"
              className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 rounded-full"
            >
              {totalProductos}
            </Badge>
          )}
        </div>
      </NavLink>
        
      </NavbarCollapse>
    </div>
  </Navbar>
)};

export default Navigation;
