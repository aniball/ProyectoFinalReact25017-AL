import React, { useState } from 'react';
import { Card, TextInput, Textarea, Button, Label } from 'flowbite-react';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de envío
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Gracias por contactarte con nosotros. Te responderemos pronto.',
    });

    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Contáctanos</h2>
        <p className="text-gray-600 mb-6 text-center">
          ¿Tenés preguntas o comentarios? Completá el siguiente formulario y te responderemos lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="nombre" value="Nombre" />
            <TextInput
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <Label htmlFor="email" value="Correo electrónico" />
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div>
            <Label htmlFor="mensaje" value="Mensaje" />
            <Textarea
              id="mensaje"
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>
          <div className="text-end">
            <Button type="submit" color="blue">
              Enviar mensaje
            </Button>
          </div>
        </form>
      </Card>

      <div className="text-center text-sm text-gray-500 mt-6">
        También podés escribirnos a <a href="mailto:contacto@athosshop.com" className="text-blue-600 underline">contacto@athosshop.com</a>
      </div>
    </div>
  );
};

export default Contacto;
