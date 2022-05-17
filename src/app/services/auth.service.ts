import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../Interface/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuthenticado: boolean = false;
  mostrarMenuEmmiter = new EventEmitter<boolean>();
  ErrorEnter:boolean = false;

  constructor(private router: Router) { }


  Authlogin(user: User) {
    if (user.name === 'gustavo@gmail.com' && user.password === '12345') {

      this.usuarioAuthenticado = true;

      this.mostrarMenuEmmiter.emit(true)
      console.log("Foi")
      this.router.navigate(['/']);
      this.ErrorEnter = false
    } else {
      console.log("Deu erro", user)

      this.usuarioAuthenticado = false;

      this.mostrarMenuEmmiter.emit(false);

      this.ErrorEnter = true

    }
  }


  
  UserIsAuthenticated() {

    return this.usuarioAuthenticado;

  }

}
