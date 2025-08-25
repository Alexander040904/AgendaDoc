
export class Quote {
  id: number;
  doctorId: number;
  patientId: number;
  date: Date;
  status: boolean;
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: {
    id: number;
    doctorId: number;
    patientId: number;
    date: Date;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = data.id;
    this.doctorId = data.doctorId;
    this.patientId = data.patientId;
    this.date = data.date;
    this.status = data.status;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt;
  }

  /**
   * Permite asignar el ID cuando es generado por la base de datos
   */
  setId(id: number) {
    this.id = id;
  }

  /**
   * @returns Estructura primitiva de la cita (quote)
   */
  value() {
    return {
      id: this.id,
      doctorId: this.doctorId,
      patientId: this.patientId,
      date: this.date,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
