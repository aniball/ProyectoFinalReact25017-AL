import React from 'react';
import { Card } from 'flowbite-react';

export default function Administracion() {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <Card className="shadow-md rounded-xl p-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Panel de Administración</h2>
        <p className="text-gray-600 text-lg">
          Acceso exclusivo para usuarios autenticados.
        </p>
      </Card>
    </div>
  );
}
