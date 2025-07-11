import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Card,
  Button,
  TextInput
} from "flowbite-react";
import { CarritoContext } from "../context/CarritoContext";
import { toast } from "react-toastify";

const Carrito = () => {
  const {
    carrito,
    vaciarCarrito,
    eliminarDelCarrito,
    actualizarCantidad
  } = useContext(CarritoContext);

  const handleCantidadChange = (e, id) => {
    const nuevaCantidad = parseInt(e.target.value);
    if (nuevaCantidad >= 1) {
      actualizarCantidad(id, nuevaCantidad);
    } else {
      toast.warn("La cantidad mínima es 1");
    }
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.price * (item.cantidad || 1),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Tu Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 font-bold text-center">
          Actualmente no tenés productos en tu carrito.
        </p>
      ) : (
        <Card className="shadow-md p-6 rounded-lg overflow-x-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Imagen</TableHeadCell>                
                <TableHeadCell>Producto</TableHeadCell>
                <TableHeadCell>Cantidad</TableHeadCell>
                <TableHeadCell>Precio</TableHeadCell>
                <TableHeadCell>Total</TableHeadCell>
                <TableHeadCell>Acciones</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {carrito.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 object-contain rounded"
                    />
                  </TableCell>                    
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </TableCell>
                  <TableCell>
                    <TextInput
                      type="number"
                      min="1"
                      value={item.cantidad || 1}
                      onChange={(e) => handleCantidadChange(e, item.id)}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    ${(item.price * (item.cantidad || 1)).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="red"
                      size="xs"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Total: ${total.toFixed(2)}
            </h3>
            <Button color="gray" onClick={vaciarCarrito}>
              Vaciar Carrito
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Carrito;
