import React, { useState } from "react"
import { Pendiente } from "./Pendiente.js";
import { Completado } from "./Completado.js";
import { Tarea } from '../Types';

interface Props {
    agregarTarea: (texto: string) => void;
    nuevaTarea: string;
    setNuevaTarea: (valor: string) => void;
    pendiente: Tarea[];
    completada: Tarea[];
    cambioTarea: (id: number) => void;
}

export const Buscador = ({agregarTarea, nuevaTarea, setNuevaTarea, pendiente, completada, cambioTarea }: Props) => {

    const [tab, setTab] = useState('pendiente');

    const envioTarea = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        agregarTarea(nuevaTarea);
    }

    return (
    <div className="flex flex-col justify-center items-center w-full">
        <div className="">
            <button className={`${tab === 'pendiente' ? 'border-b border-amber-200' : ''}`} onClick={() => setTab('pendiente')}>Pendientes</button>
            <button className={`${tab === 'completada' ? 'border-b border-amber-300' : ''}`} onClick={() => setTab('completada')}>Completadas</button>
        </div>
        <h1>Toda la lista</h1>
        <form onSubmit={envioTarea}>
            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="¿que hay que hacer?" />
            <button type="submit">Agregar</button>
        </form>
        <div>
            <ul>
                {tab === 'pendiente' ? (
                    <div>
                        <h2>Tareas Pendiente</h2>
                        <ul>
                            {pendiente.map((item) => (
                                <li key={item.id}>
                                    <Pendiente item={item} cambioTarea={cambioTarea} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h2>Tareas Completadas</h2>
                        <ul>
                            {completada.map((item) => (
                                <li key={item.id}>
                                    <Completado item={item} cambioTarea={cambioTarea} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </ul>
        </div>
    </div>
    )
}