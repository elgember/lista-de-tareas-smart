export const Completado = ({ item, cambioTarea}) => {

    return (
    <div>
        <span>{item.texto}</span>
        <button onClick={() => cambioTarea(item.id)}>Deshacer</button>
    </div>
    )
}