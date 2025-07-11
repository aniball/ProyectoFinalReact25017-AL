import { Footer } from "flowbite-react";
import { NavLink } from "react-router-dom";

const AppFooter = () => (
  <Footer container className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 mt-12 py-6">
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <span className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Athos Shop™. Todos los derechos reservados.</span>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm ${
              isActive
                ? 'text-blue-700 dark:text-blue-300 font-medium underline'
                : 'text-gray-600 dark:text-gray-300 hover:underline'
            }`
          }
        > Acerca de
        </NavLink>
        <NavLink
          to="#"
          className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
        > Política de privacidad
        </NavLink>
        <NavLink
          to="/contacto"
className={({ isActive }) =>
            `text-sm ${
              isActive
                ? 'text-blue-700 dark:text-blue-300 font-medium underline'
                : 'text-gray-600 dark:text-gray-300 hover:underline'
            }`
          }
        > Contacto
        </NavLink>        
      </div>
    </div>
  </Footer>
);

export default AppFooter;
