import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import AlumnoCard from "./components/AlumnoCard";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          <AlumnoCard
          nombre="Daniel Puccio"
          carrera="Desarrollo de Software"
          estado="Matriculado"
          />
          
          <AlumnoCard
          nombre="Maria Perez"
          carrera="Diseño Grafico"
          estado="Inactivo"
          />

          <AlumnoCard
          nombre="Carlos Mendoza"
          carrera="Administracion Industrial"
          estado="Matriculado"
          />

          <AlumnoCard
          nombre="Diego Fernandez"
          carrera="Ciberseguridad"
          estado="Inactivo"
          />

          <AlumnoCard
          nombre="Camila Vargas"
          carrera="Administración de Empresas"
          estado="Matriculado"
          />

          <AlumnoCard 
          nombre="Sebastian Flores"
          carrera="Diseño Gráfico"
          estado="Inactivo"
          />
        </div>
      </div>
    </>
  );
}

export default App;