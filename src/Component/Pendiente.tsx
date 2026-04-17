import { Tarea } from '../Types';

interface Props {
    item: Tarea;
    onCambioTarea: (id: number) => void;
}

export const Pendiente = ({ item, onCambioTarea }:Props) => {
    return (
    <div className='flex justify-evenly w-screen p-3'>
        <span>{item.texto}</span>
        <button className='bg-[#48e] rounded px-2 py-1 text-white cursor-pointer' onClick={() => onCambioTarea(item.id)}>Completar</button>
    </div>
    )
}