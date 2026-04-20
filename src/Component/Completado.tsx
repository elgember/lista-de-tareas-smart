import { Tarea } from '../Types';

interface Props {
    item: Tarea;
    onCambioTarea: (id: number) => void;
    eliminarTarea: (id: number) => void;
}

export const Completado = ({ item, onCambioTarea, eliminarTarea }: Props) => {

    return (
    <div className='flex items-center w-full justify-center p-3'>
        <div className='w-full sm:w-[40%] ml-4'>
            <span>{item.texto}</span>
        </div>
        <div className='mr-4 flex gap-2'>
            <button className='bg-[#48e] py-1 px-3 rounded text-white' onClick={() => onCambioTarea(item.id)}>Desacer</button>
            <button className='bg-[#e11406] py-1 px-3 rounded text-white' onClick={() => eliminarTarea(item.id)}>Eliminar</button>
        </div>
    </div>
    )
}