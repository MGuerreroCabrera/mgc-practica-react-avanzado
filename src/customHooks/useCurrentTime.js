import { useState, useEffect } from 'react';

// Definir el custom hook
const useCurrentTime = () => {
    // Declarar un estado para almacenar la hora actual
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // COnfigurar un intervalo que se ejecuta cada segundo
        const intervalId = setInterval(() => {
            // Actualizamos el estado con la hora actual
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []);

    // Retornar la hora actual
    return currentTime;
};

export default useCurrentTime;