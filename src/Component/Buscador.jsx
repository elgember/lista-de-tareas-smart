import { useState } from "react"

export const Buscador = ({agregarTarea, nuevaTarea, setNuevaTarea, pendiente, completada, cambioTarea}) => {

    const [tab, setTab] = useState('pendiente');

    return (
    <div>
        <div>
            <button className={`${tab === 'pendiente' ? 'active' : ''}`}>Pendientes</button>
            <button className={`${tab === 'completada' ? 'active' : ''}`}>Completadas</button>
        </div>
        <h1>Toda la lista</h1>
        <form onSubmit={agregarTarea}>
            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="¿que hay que hacer?" />
            <button type="submit">Agregar</button>
        </form>
    </div>
    )
}