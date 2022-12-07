import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged(): boolean {
    if(this.getToken()){
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getNombreUsuario() {
    if(!this.isLogged()){
      return null;
    }
      const token = this.getToken();
      if(token != null){
        const payload = token.split('.')[1];
        const values = atob(payload);
        const valuesJson = JSON.parse(values);
        const nombreUsuario = valuesJson.nombreUsuario;
        return nombreUsuario;
      }
  }

  isAdmin(): boolean {
    if(!this.isLogged()){
       return false;
    }
      const token = this.getToken();
      if (token != null) {
        const payload = token.split('.')[1];
        const values = atob(payload);
        const valuesJson = JSON.parse(values);
        const roles = valuesJson.roles;
        if(roles.indexOf('admin') < 0) {
          return false;
        }
        return true;
      }
      return false;
  }

  logOut(): void {
    localStorage.clear();
  }

}
