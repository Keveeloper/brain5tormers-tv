import { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';

interface Participant {
    id: number,
    name: string,
    image_url: string,
    email: string,
    number: string,
    ocuppation: string,
    company: string,
    talk_about: string,
    instagram: string,
    best_area: string,
    purpose: string,
    professional_power: string,
    event_type: string,
    event_status: string,
}

interface UseParticipantsResult {
  participants: Participant[];
  loading: boolean;
  error: AxiosError | null;
}

const useParticipants = (city: string): UseParticipantsResult => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const intervalIdRef = useRef<number | null>(null); // useRef para almacenar el ID del intervalo

  const fetchParticipants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Participant[]>(`${import.meta.env.VITE_PARTICIPANTS_BASE_URL}${city}`); // Especificamos el tipo de dato que esperamos en la respuesta
      const newParticipants: Participant[] = response.data;
      if (JSON.stringify(newParticipants) !== JSON.stringify(participants)) {
        setParticipants(newParticipants);
        console.log('Participantes actualizados:', newParticipants);
      } else {
        console.log('No hay nuevos participantes. Manteniendo la lista actual.');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error de Axios al obtener participantes:', err);
        setError(err); // El error es de tipo AxiosError
      } else {
        console.error('Error desconocido al obtener participantes:', err);
        setError(new AxiosError('An unknown error occurred', 'UNKNOWN_ERROR')); // O un tipo de error genérico
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipants();

    intervalIdRef.current = window.setInterval(fetchParticipants, 300000); // 5 minutos en milisegundos

    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
    };
  }, [city, participants]); // Dependencia 'participants' para la optimización de JSON.stringify

  return { participants, loading, error };
};

export default useParticipants;