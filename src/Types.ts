
export type Prioridad = 'Alta' | 'Media' | 'Baja';

export interface Tarea {
    id: number;
    texto: string;
    prioridad: Prioridad;
    completada: boolean;
}