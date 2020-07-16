import axios, { AxiosResponse } from 'axios';

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
  education: string[];
  specialties: string[];
  experience: string[];
  price: number;
  virtualRoom: string;
  longDescription: string;
  shortDescription: string;
  appointments: Object;
  reviews: string[];
  healthInsurance: string[];
}

export const fetchAllProfessionals = async (): Promise<AxiosResponse<Professional[]>> => {
  return await api.get('psychologist');
};

export const fetchOneProfessional = async (id: string): Promise<AxiosResponse<Professional>> => {
  return await api.get(`psychologist/${id}`);
};
