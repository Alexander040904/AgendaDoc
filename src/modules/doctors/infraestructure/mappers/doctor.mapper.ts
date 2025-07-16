import { Doctor } from '../../domain/entities/doctor';
import { DoctorWithUser } from '../../domain/types/doctor-with-user.type';

export class DoctorMapper {
  /**
   * Convierte resultado Prisma a entidad Doctor
   */
  static toEntity(data: any): Doctor {
    return new Doctor({
      id: data.id,
      userId: data.user_id,
      consultationAmount: data.consultationAmount,
    });
  }

  /**
   * Convierte resultado Prisma con user a DoctorWithUser
   */
  static toDoctorWithUser(data: any): DoctorWithUser {
    return {
      doctor: this.toEntity(data),
      user: {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        age: data.user.age,
        role_id: data.user.role_id,
      },
    };
  }
}
