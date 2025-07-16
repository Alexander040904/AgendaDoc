import { Doctor } from "../entities/doctor";


/**
 * Representa el resultado de obtener un Doctor con su información de usuario
 */
export interface DoctorWithUser {
  doctor: Doctor;
  user: {
    id: number;
    name: string;
    email: string;
    age: number;
    role_id: number;
  };
}
