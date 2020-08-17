import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export interface Professional {
  _id: string;
  name: string;
  email: string;
  password: string;
  crp: string;
  avatar: string;
  whatsapp?: string;
  workingHours?: {
    startTime: string;
    endTime: string;
  };
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

export interface Patient {
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

interface CreateReview {
  psychologistId: string;
  patientId: string;
  rate: number;
  description: string;
}

export interface IProfesionalReview {
  _id: string;
  patient: {
    _id: string;
    name: string,
  };
  rate: number;
  description: string;
  createdAt: string;
}

export const fetchAllProfessionals = async (): Promise<AxiosResponse<Professional[]>> => api.get('psychologist');

export const fetchOneProfessional = async (id: string): Promise<AxiosResponse<Professional>> => api.get(`psychologist/${id}`);

export const fetchFilteredProfessionals = async (
  query: string,
): Promise<AxiosResponse<Professional[]>> => api.get(`psychologist${query}`);

export const fetchPatientLogin = async (
  loginData: LoginData,
): Promise<AxiosResponse<PatientLogin>> => api.post('patient/login', loginData);

export const fetchPatient = async (id: string): Promise<AxiosResponse<Patient>> => api.get(`patient/${id}`);

export const fetchCreateReview = async (reviewData: CreateReview): Promise<AxiosResponse<CreateReview>> => api.post('reviews', reviewData);

export const fetchProfessionalReviews = async (id: string): Promise<AxiosResponse<IProfesionalReview[]>> => api.get(`reviews/${id}`);
