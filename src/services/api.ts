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

interface Patient {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  date: Date;
  favPsychologists: string[];
  appointments: string[];
  reviews: string[];
}

interface PatientLogin {
  patient: Patient;
  token: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const fetchAllProfessionals = async (): Promise<AxiosResponse<Professional[]>> => {
  return await api.get('psychologist');
};

export const fetchOneProfessional = async (id: string): Promise<AxiosResponse<Professional>> => {
  return await api.get(`psychologist/${id}`);
};

export const fetchFilteredProfessionals = async (
  query: string
): Promise<AxiosResponse<Professional[]>> => {
  return await api.get(`psychologist${query}`);
};

export const fetchPatientLogin = async (
  loginData: LoginData
): Promise<AxiosResponse<PatientLogin>> => {
  console.log('Login data: ', loginData);

  return await api.post('patient/login', loginData);
};
