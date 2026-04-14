import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Buscador } from './Component/Buscador';
import { useState } from 'react';

function App() {

  const [tareas, setTareas] = useState([
    {id: 1, texto: 'aprender react', completada: false},
    {id: 2, texto: 'aprender javascript', completada: false},
    {id: 3, texto: 'aprender typescript', completada: true},
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  //Agregar nueva tarea 
  const agregarTarea = (e) => {
    e.prevenDefault();
    if (!nuevaTarea.trim()) return;

    const tareaAgregada = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    }

    setTareas([...tareas, tareaAgregada]);
    setNuevaTarea('');
  }

  //cambio de estado de la tarea (cpmletada/descompletar)
  const cambioTarea = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? {...t, completada: !t.completada } : t ))
    );
  };

  const pendiente = tareas.filter((t) => !t.completada);
  const completada = tareas.filter((t) => t.completada);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} replace /> }/>
        <Route path='/inicio' element={<><Buscador agregarTarea={agregarTarea} nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} pendiente={pendiente} completada={completada} cambioTarea={cambioTarea} /> </> } />
      </Routes>
    </>
  )
}

export default App
