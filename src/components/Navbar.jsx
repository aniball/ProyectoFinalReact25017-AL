import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import logo from '../assets/athos-logo.png'; 

const categorias = [
  { id: 'electronics', name: 'Electrónica' },
  { id: 'jewelery', name: 'Joyería' },
  { id: "men's clothing", name: 'Ropa de Hombre' },
  { id: "women's clothing", name: 'Ropa de Mujer' },
];

const Navigation = () => (
  <Navbar fluid rounded className="bg-white shadow-md border-b border-gray-100 py-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <NavbarBrand as={Link} to="/" className="flex items-center gap-2">
        <img src={logo} alt="Athos Shop Logo" className="h-14" />
        <span className="text-2xl font-bold text-blue-700">Athos Shop</span>
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" className="text-gray-700 font-medium">
          Home
        </NavbarLink>

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
              <Link to={`/categoria/${encodeURIComponent(cat.id)}`} className="w-full block">
                {cat.name}
              </Link>
            </DropdownItem>
          ))}
        </Dropdown>

        <NavbarLink as={Link} to="/login" className="text-gray-700 font-medium">
          Inciar Sesión
        </NavbarLink>
        
        <NavbarLink
          as={Link}
          to="/carrito"
          className="text-gray-700 flex items-center gap-1 hover:text-blue-600">
          <ShoppingCartIcon className="h-5 w-5" />
        </NavbarLink>
      </NavbarCollapse>
    </div>
  </Navbar>
);

export default Navigation;
