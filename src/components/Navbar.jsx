import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import logo from '../assets/athos-logo.png'; 
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const categorias = [
  { id: 'electronics', name: 'Electrónica' },
  { id: 'jewelery', name: 'Joyería' },
  { id: "men's clothing", name: 'Ropa de Hombre' },
  { id: "women's clothing", name: 'Ropa de Mujer' },
];


const Navigation = () =>  {

  const { isAuth, logout } = useAuth(); // Asegúrate de que useAuth esté correctamente implementado
  const navigate = useNavigate(); // Mueve esto dentro del componente Navigation
  const cerrarSesion = () => {
    logout();
    navigate('/');
  };

  return (    
  <Navbar fluid rounded className="bg-white shadow-md border-b border-gray-100 py-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <NavbarBrand as={Link} to="/" className="flex items-center gap-2">
        <img src={logo} alt="Athos Shop Logo" className="h-14" />
        <span className="text-2xl font-bold text-blue-700">Athos Shop</span>
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-700 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
          }
        >
          Home
        </NavLink>

        {/* Dropdown de Categorías */}
        <Dropdown
          label="Categorías"
          renderTrigger={() => (
            <span className="text-gray-700 font-medium cursor-pointer flex items-center gap-1">
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
                  `block px-2 py-1 text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                }
              >
                {cat.name}
              </NavLink>              
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Solo si está autenticado */}
        {isAuth && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-gray-700 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
              }
            >
              Administracion
            </NavLink>
        )}

        {/* Login o Logout */}
        <div className="ml-auto">
          {!isAuth ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-gray-700 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
              }
            >
              Inciar Sesión
            </NavLink>
          ) : (
            <NavLink
              to="/"
              onClick={cerrarSesion}
              className={({ isActive }) =>
                `text-gray-700 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
              }
            >
              Cerrar sesión
            </NavLink>
          )}
        </div>

        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            `text-gray-700 flex items-center gap-1 font-medium ${isActive ? 'text-blue-700 underline' : 'hover:text-blue-600'}`
          }
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Carrito
        </NavLink>
        
      </NavbarCollapse>
    </div>
  </Navbar>
)};

export default Navigation;
