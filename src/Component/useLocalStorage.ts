import { useEffect, useState } from "react";

// guardar cualquier tipo de datos (T)
export function useLocalStorage<T>(key: string, valorInicial: T) {

    //iniciar el estado
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : valorInicial;
        } catch (error) {
            console.error('Error leyendo localStorage', error);
            return valorInicial;
        }
    });

    //ver cambios y guardar
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Error guardando en localStorage', error);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue] as const;
}