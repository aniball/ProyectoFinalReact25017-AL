# 🛒 Athos Shop

**Athos Shop** es una tienda en línea desarrollada con React, Vite, TailwindCSS y Flowbite. Permite navegar, buscar y administrar productos, agregar al carrito, realizar login y proteger rutas administrativas. Incluye integración con Cloudinary para gestión de imágenes.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React + Vite**
- 🎨 **TailwindCSS** con soporte para modo claro/oscuro
- 💡 **Flowbite React** (UI components)
- 🔒 **Context API** para autenticación y carrito
- ☁️ **Cloudinary** para subir imágenes de productos
- 🔁 **MockAPI** como backend REST para productos
- 🔔 **React Toastify** para notificaciones
- 🧭 **React Router DOM** para navegación

---

## 📁 Estructura de carpetas


```
src/
│
├── components/ # Navbar, Footer, etc.
├── context/ # AuthContext, CarritoContext
├── pages/ # Home, ProductsCRUD, About, Contact
├── assets/ # Imágenes locales
├── App.jsx # Componente principal
├── main.jsx # Punto de entrada
├── App.css # Tailwind y estilos personalizados
└── vite.config.js

```

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
    git clone https://github.com/aniball/ProyectoFinalReact25017-AL.git
    cd ProyectoFinalReact25017-AL
```

2. Instalá las dependencias:

```
    npm install
```

3. Iniciá el servidor de desarrollo:

```
    npm run dev
```

4. Accedé a la app en http://localhost:5173


---

🔑 Funcionalidades destacadas
🧾 Catálogo: navegación por categorías y detalle de productos

🛍 Carrito: agregar, eliminar, modificar cantidades, total en tiempo real

🔐 Login: sistema de autenticación básico con rutas protegidas

⚙️ CRUD de productos: agregar, editar y eliminar productos (vía MockAPI)

🌗 Modo claro/oscuro: activado automáticamente según preferencia del usuario

☁️ Carga de imágenes: integración con Cloudinary desde el CRUD

📄 Páginas informativas: Acerca de, Contacto, etc.

🌐 Deploy en Netlify
Esta aplicación está lista para ser desplegada en netlify.com.

🛠 Scripts disponibles
```
npm run dev       # Inicia Vite
npm run build     # Compila la app para producción
npm run preview   # Modo preview local
```