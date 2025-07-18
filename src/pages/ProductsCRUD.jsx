import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Modal,
  TextInput,
  Textarea
} from "flowbite-react";
import { Label } from "flowbite-react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { toast } from "react-toastify";

const cld = new Cloudinary({ cloud: { cloudName: "dtauarwps" } });
const API_URL = "https://686b128ee559eba9087171ff.mockapi.io/products";

export default function ProductsCRUD() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modo, setModo] = useState("agregar");
  const [productoActual, setProductoActual] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  const categorias = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
  ];

  // Cargar productos
  const fetchProductos = async () => {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener productos");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error(error);
      alert("Error cargando productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // Manejador de cambios
  const handleChange = (e) => {
    setProductoActual({
      ...productoActual,
      [e.target.name]: e.target.value,
    });
  };

  // Guardar (Agregar o Editar)
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (productoActual.price <= 0) {
      toast.warning("El precio debe ser mayor a 0.");
      return;
    }
    if (!productoActual.description || productoActual.description.length < 10) {
      toast.warning("La descripción debe tener al menos 10 caracteres.");
      return;
    }

    if (modo === "editar" && !productoActual.id) {
      toast.error("Error: el producto no tiene un ID para editar.");
      return;
    }
    
    try {
      const metodo = modo === "agregar" ? "POST" : "PUT";
      const url = modo === "agregar"
        ? API_URL
        : `${API_URL}/${productoActual.id}`;

      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoActual),
      });

      if (!res.ok) throw new Error("Error al guardar producto");
      setShowModal(false);
      setProductoActual({});
      fetchProductos();
    } catch (error) {
      console.error(error);
      toast.error("Error al guardar el producto");
    }
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchProductos();
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el producto");
    }
  };

  const handleEditar = (producto) => {
    setProductoActual(producto);
    setModo("editar");
    setShowModal(true);
  };

  const handleAgregar = () => {
    setProductoActual({
      title: "",
      price: "",
      description: "",
      category: "",
      image: ""
    });
    setModo("agregar");
    setShowModal(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "productos_preset"); 

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dtauarwps/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.secure_url) {
        setProductoActual({
          ...productoActual,
          image: data.secure_url,
        });
      } else {
        alert("No se pudo obtener la URL de la imagen.");
      }
    } catch (error) {
      console.error("Error al subir imagen:", error);
      alert("Error al subir la imagen.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {!loading ? 
      (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-blue-700">Gestión de Productos</h1>
            <Button color="blue" onClick={handleAgregar}>
              Agregar Producto
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {productos.map((p) => (
              <Card className="w-80 mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
                <div className="relative w-full flex justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 object-contain mt-6 mb-2 transition-transform duration-300 hover:scale-105"
                    style={{ maxWidth: '160px' }}
                  />
                  <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded">
                    ${p.price}
                  </span>
                </div>
                <div className="px-4 pb-4 flex flex-col items-center w-full">
                  <h5 className="text-lg font-bold mt-2 text-center line-clamp-2 text-gray-800 dark:text-white">
                    {p.title}
                  </h5>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 mb-3 text-center line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex gap-2 w-full justify-center">
                    <Button color="yellow" onClick={() => handleEditar(p)} className="w-1/2">
                      Editar
                    </Button>
                    <Button color="red" onClick={() => handleEliminar(p.id)} className="w-1/2">
                      Eliminar
                    </Button>
                  </div>
                </div>
              </Card>            
            ))}
          </div>
        </>
      ):<div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-t-transparent border-gray-800 rounded-full animate-spin"></span>
          Cargando...
        </div>}
        <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
            </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Nombre *</Label>
              <TextInput
                name="title"
                value={productoActual.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Precio *</Label>
              <TextInput
                name="price"
                type="number"
                value={productoActual.price}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descripción *</Label>
              <Textarea
                name="description"
                value={productoActual.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Categoría *</Label>
              <select
                name="category"
                value={productoActual.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
              >
                <option value="">Seleccionar categoría</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select> 
            </div>
            <div>
              <Label htmlFor="image">Imagen (URL o Archivo)</Label>

              <TextInput
                name="image"
                placeholder="URL de la imagen"
                value={productoActual.image}
                onChange={handleChange}
                className="mb-2"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 mt-1"
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" color="gray" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button type="submit" color="blue">
                {modo === "agregar" ? "Agregar" : "Guardar cambios"}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
