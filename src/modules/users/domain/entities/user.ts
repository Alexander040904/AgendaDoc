/**
 * Entidad User
 */
export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  roleId: number;

  // Campos automáticos
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    roleId: number;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.age = data.age;
    this.roleId = data.roleId;
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
   * @returns Estructura primitiva del usuario
   */
  value() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      age: this.age,
      roleId: this.roleId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
