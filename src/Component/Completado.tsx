import { Tarea } from '../Types';

interface Props {
    item: Tarea;
    onCambioTarea: (id: number) => void;
}

export const Completado = ({ item, onCambioTarea}: Props) => {

    return (
    <div>
        <span>{item.texto}</span>
        <button onClick={() => onCambioTarea(item.id)}>Deshacer</button>
    </div>
    )
}