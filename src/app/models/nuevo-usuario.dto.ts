export class NuevoUsuarioDto {

  nombre: string;

  email: string;

  nombreUsuario: string;

  password: string;

  constructor(nombre: string, email: string, nombreUsuario: string, password: string) {
    this.nombre = nombre;
    this.email = email;
    this.nombreUsuario = nombreUsuario;
    this.password = password;
  }
}
