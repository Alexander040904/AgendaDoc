/**
 * Entidad AvailableSchedule
 */
export class AvailableSchedule {
  id: number;
  doctorId: number;
  dayOfWeek: string;
  startTime: string;  // Hora en formato HH:mm:ss
  endTime: string;    // Hora en formato HH:mm:ss

  constructor(data: {
    id: number;
    doctorId: number;
    dayOfWeek: string;
    startTime: string;
    endTime: string;

  }) {
    this.id = data.id;
    this.doctorId = data.doctorId;
    this.dayOfWeek = data.dayOfWeek;
    this.startTime = data.startTime;
    this.endTime = data.endTime;

  }

  /**
   * Permite asignar el ID cuando es generado por la base de datos
   */
  setId(id: number) {
    this.id = id;
  }

  /**
   * @returns Estructura primitiva del available schedule
   */
  value() {
    return {
      id: this.id,
      doctorId: this.doctorId,
      dayOfWeek: this.dayOfWeek,
      startTime: this.startTime,
      endTime: this.endTime,

    };
  }
}
