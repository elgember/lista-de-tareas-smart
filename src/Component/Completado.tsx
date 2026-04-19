import { Tarea } from '../Types';

interface Props {
    item: Tarea;
    onCambioTarea: (id: number) => void;
}

export const Completado = ({ item, onCambioTarea}: Props) => {

    return (
    <div className='flex items-center w-full justify-center p-3'>
        <div className='w-full sm:w-[40%] ml-4'>
            <span>{item.texto}</span>
        </div>
        <div className='mr-4'>
            <button className='bg-[#48e] py-1 px-3 rounded text-white' onClick={() => onCambioTarea(item.id)}>Deshacer</button>
        </div>
    </div>
    )
}