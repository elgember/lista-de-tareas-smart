import React, { useState } from "react"
import { Pendiente } from "./Pendiente";
import { Completado } from "./Completado";
import { Tarea } from '../Types';
import { Icon } from "@iconify/react";

interface Props {
    agregarTarea: (texto: string) => void;
    nuevaTarea: string;
    setNuevaTarea: (valor: string) => void;
    pendiente: Tarea[];
    completada: Tarea[];
    onCambioTarea: (id: number) => void;
}

export const Buscador = ({ agregarTarea, nuevaTarea, setNuevaTarea, pendiente, completada, onCambioTarea }: Props) => {

    const [tab, setTab] = useState('pendiente');

    const envioTarea = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        agregarTarea(nuevaTarea);
    }

    return (
    <div className="w-full flex flex-col items-center">
        <div className="flex gap-6 p-4">
            <button className={`${tab === 'pendiente' ? 'border-b border-[#48e]' : ''}`} onClick={() => setTab('pendiente')}>Pendientes</button>
            <button className={`${tab === 'completada' ? 'border-b border-[#48e]' : ''}`} onClick={() => setTab('completada')}>Completadas</button>
        </div>
        <h1>Toda la lista</h1>
        <form onSubmit={envioTarea} className="p-4 relative">
            <Icon className="absolute top-5 left-6" icon="f7:search" width="24" height="24" />
            <input className="bg-[#f5f5f4] rounded border border-[#d1d5db] pl-9 p-1" type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="¿Que hay que hacer?" />
            <button className="ml-6 bg-[#48e] py-1 px-2 rounded text-white cursor-pointer" type="submit">Agregar</button>
        </form>
        <div className="w-full">
            <ul>
                {tab === 'pendiente' ? (
                    <div>
                        <h2 className="text-center p-4">Tareas Pendiente</h2>
                        <ul>
                            {pendiente.map((item) => (
                                <li key={item.id}>
                                    <Pendiente item={item} onCambioTarea={onCambioTarea} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-center p-2">Tareas Completadas</h2>
                        <ul>
                            {completada.map((item) => (
                                <li key={item.id}>
                                    <Completado item={item} onCambioTarea={onCambioTarea} />
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