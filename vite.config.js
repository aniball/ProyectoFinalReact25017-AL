import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/ProyectoFinalReact25017-AL",
  plugins: [react(), tailwindcss(), flowbiteReact()],
});