export const Pendiente = ({ item, cambioTarea }) => {
    return (
    <div>
        <span>{item.texto}</span>
        <button onClick={() => cambioTarea(item.id)}>Completar</button>
    </div>
    )
}