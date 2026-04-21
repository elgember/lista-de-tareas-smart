import { Icon } from '@iconify/react/dist/iconify.js';
import { Tarea, Prioridad } from '../Types';

interface Props {
    item: Tarea;
    onCambioTarea: (id: number) => void;
    colorPrioridad: (p: Prioridad) => string;
    prioridad: Prioridad;
}

export const Pendiente = ({ item, onCambioTarea, colorPrioridad, prioridad }:Props) => {
    return (
    <div className='flex w-full p-3 items-center justify-center'>
        <div className='w-full ml-4 sm:w-[38%] flex'>
            <span className={`${colorPrioridad(item.prioridad)}`}><Icon icon="tabler:point-filled" width="24" height="24" /></span>
            <span>{item.texto}</span>
        </div>
        <div className='mr-4'>
            <button className='bg-[#48e] rounded px-3 py-1 text-white cursor-pointer' onClick={() => onCambioTarea(item.id)}>Completar</button>
        </div>
    </div>
    )
}