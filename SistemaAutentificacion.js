export class SistemaAutentificacion {
  static login(usuario, clave) {
    if ("autenticable" in usuario && usuario.autentcable instanceof Function)
      return usuario.autenticable(clave);
    else return false;
  }
}
