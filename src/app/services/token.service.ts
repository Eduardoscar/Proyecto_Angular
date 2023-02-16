import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  almacenar(llave: string, valor: any) {
    localStorage.setItem(llave, JSON.stringify(valor));
  }

  consultar(llave: string) {
    return JSON.parse(localStorage.getItem(llave)|| '{}');
  }

  borrar(llave: string) {
    localStorage.removeItem(llave);
  }

  limpiarTodo() {
    localStorage.clear();
  }
  
  getRole() {
    const token= JSON.parse(localStorage.getItem("Token")|| '');
    const parts = token.split('.');
    const decodedToken = atob(parts[1]);
    const tokenData = JSON.parse(decodedToken)
    return tokenData.rol
  }

  getId() {
    const token= JSON.parse(localStorage.getItem("Token")|| '');
    const parts = token.split('.');
    const decodedToken = atob(parts[1]);
    const tokenData = JSON.parse(decodedToken)
    return tokenData.id
  }
}
