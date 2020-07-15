import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

interface WorkingHours {
  startTime: string;
  endTime: string;
}

export interface Professional {
  _id: string;
  name: string;
  email: string;
  password: string;
  crp: string;
  avatar: string;
  whatsapp?: string;
  workingHours?: WorkingHours;
  education?: string[];
  specialties: string[];
  experience?: string[];
  price: number;
  virtualRoom?: string;
  longDescription?: string;
  shortDescription?: string;
  appointments?: Object;
  reviews?: string[];
}

export const fetchAllProfessionals = async (): Promise<Professional[]> => {
  try {
    const response = await api.get('psychologist');
    return response.data;
  } catch (error) {
    return [];
  }
};
