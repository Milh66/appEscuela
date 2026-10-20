import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import AlumnoCard from "./components/AlumnoCard";
import Contador from "./components/Contador";

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
          estadoInicial="Matriculado"
        />
          
          <AlumnoCard
          nombre="Maria Perez"
          carrera="Diseño Grafico"
          estadoInicial="Inactivo"
          />

          <AlumnoCard
          nombre="Carlos Mendoza"
          carrera="Administracion Industrial"
          estadoInicial="Matriculado"
          />

          <AlumnoCard
          nombre="Diego Fernandez"
          carrera="Ciberseguridad"
          estadoInicial="Inactivo"
          />

          <AlumnoCard
          nombre="Camila Vargas"
          carrera="Administración de Empresas"
          estadoInicial="Matriculado"
          />

          <AlumnoCard 
          nombre="Sebastian Flores"
          carrera="Diseño Gráfico"
          estadoInicial="Inactivo"
          />
        </div>
        
        <Contador

        />
      
      </div>
    </>
  );
}

export default App;

      
