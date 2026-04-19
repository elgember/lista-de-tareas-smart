import { Tarea } from '../Types';

interface Props {
    item: Tarea;
    onCambioTarea: (id: number) => void;
}

export const Pendiente = ({ item, onCambioTarea }:Props) => {
    return (
    <div className='flex w-full p-3 items-center justify-center'>
        <div className='w-full ml-4 sm:w-[38%]'>
            <span>{item.texto}</span>
        </div>
        <div className='mr-4'>
            <button className='bg-[#48e] rounded px-3 py-1 text-white cursor-pointer' onClick={() => onCambioTarea(item.id)}>Completar</button>
        </div>
    </div>
    )
}