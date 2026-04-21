import { Routes, Route, Navigate } from 'react-router-dom';
import { Buscador } from './Component/Buscador';
import { useState } from 'react';
import { Tarea, Prioridad } from './Types'
import { useLocalStorage } from './Component/useLocalStorage';

function App() {

  const [tareas, setTareas] = useLocalStorage<Tarea[]>('mis_tareas',[
    {id: 1, texto: 'aprender react', completada: false, prioridad: 'Alta'},
    {id: 2, texto: 'aprender javascript', completada: false, prioridad: 'Media'},
    {id: 3, texto: 'aprender typescript', completada: true, prioridad: 'Baja'},
  ]);

  //funcion para eliminar tareas completadas
  const eliminarTarea = (id: number) => {
    if (window.confirm('¿ Seguro que quieres borrar esta tarea ?')) {
      //filtar todas las tareas con id difente al recibido
    const recienAgregado = tareas.filter(tarea => tarea.id !== id);
    setTareas(recienAgregado);
    }
  }

  //estado para la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState('');

  //estado para la prioridad de las tareas 'Media' por defecto
  const [prioridad, setPrioridad] = useState<Prioridad>('Media');

  //Agregar nueva tarea 
  const agregarTarea = (texto: string) => {
    const nueva = { id: Date.now(),
    texto: nuevaTarea,
    completada: false,
    prioridad: prioridad,
  };
    setTareas([ nueva, ...tareas]);
    setNuevaTarea('');
    setPrioridad('Media');
  }

  //cambio de estado de la tarea (comletada/descompletar)
  const onCambioTarea = (id: number) => {
    setTareas(
      tareas.map((t) => (t.id === id ? {...t, completada: !t.completada } : t ))
    );
  };

  //por orden de prioridad 
  const tareasOrdenadas = [ ...tareas].sort((a, b) => {
    const peso: Record<Prioridad, number> = { Alta: 1, Media: 2, Baja: 3};
    return peso[a.prioridad] - peso[b.prioridad];
  })

  // filtamos las tareas para menu de completado y pendiente
  const pendiente = tareasOrdenadas.filter((t) => !t.completada);
  const completada = tareasOrdenadas.filter((t) => t.completada);

  const colorPrioridad = (p: Prioridad) => {
    switch (p) {
      case 'Alta': return 'text-red-500';
      case 'Media': return 'text-orange-500';
      case 'Baja': return 'text-green-500';
      default: return 'text-gray-700';
    }
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} replace /> }/>
        <Route path='/inicio' element={<><Buscador colorPrioridad={colorPrioridad} prioridad={prioridad} setPrioridad={setPrioridad} eliminarTarea={eliminarTarea} agregarTarea={agregarTarea} nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} pendiente={pendiente} completada={completada} onCambioTarea={onCambioTarea} /> </> } />
      </Routes>
    </>
  )
}

export default App
