import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
//This is to set up tailwind
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({

  //If you don't add tailwind here it will not be configured into your vite app.
  
  plugins: [react(), tailwindcss()],

  //This changes how the import works

  resolve:{
    alias: {
      "@":path.resolve(__dirname,"./src"),
    },
  },
});
