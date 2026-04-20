import { Routes, Route, Navigate } from 'react-router-dom';
import { Buscador } from './Component/Buscador';
import { useState } from 'react';
import { Tarea } from './Types'
import { useLocalStorage } from './Component/useLocalStorage';

function App() {

  const [tareas, setTareas] = useLocalStorage<Tarea[]>('mis_tareas',[
    {id: 1, texto: 'aprender react', completada: false},
    {id: 2, texto: 'aprender javascript', completada: false},
    {id: 3, texto: 'aprender typescript', completada: true},
  ]);

  //funcion para eliminar tareas completadas
  const eliminarTarea = (id: number) => {
    if (window.confirm('¿seguro que quieres borrar esta tarea')) {
      //filtar todas las tareas con id difente al recibido
    const recienAgregado = tareas.filter(tarea => tarea.id !== id);
    setTareas(recienAgregado);
    }
  }

  const [nuevaTarea, setNuevaTarea] = useState('');

  //Agregar nueva tarea 
  const agregarTarea = (texto: string) => {
    const nueva = { id: Date.now(), texto, completada: false };
    setTareas([...tareas, nueva]);
    setNuevaTarea('');
  }

  //cambio de estado de la tarea (comletada/descompletar)
  const onCambioTarea = (id: number) => {
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
        <Route path='/inicio' element={<><Buscador eliminarTarea={eliminarTarea} agregarTarea={agregarTarea} nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} pendiente={pendiente} completada={completada} onCambioTarea={onCambioTarea} /> </> } />
      </Routes>
    </>
  )
}

export default App
