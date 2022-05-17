import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { User } from '../Interface/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuthenticado: boolean = false;
  mostrarMenuEmmiter = new EventEmitter<boolean>();
  ErrorEnter:boolean = false;
  API = 'http://localhost:5000/user';
  
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }


  Authlogin(user: User) {
    if (user.name === 'gustavo@gmail.com' && user.password === '12345') {

      this.usuarioAuthenticado = true;

      this.mostrarMenuEmmiter.emit(true)

      this.router.navigate(['/home']);
      this.ErrorEnter = false
    } else {


      this.usuarioAuthenticado = false;

      this.mostrarMenuEmmiter.emit(false);

      this.ErrorEnter = true

    }
  }

  createUser(user:any) {
    return this.http.post(this.API,user).pipe(take(1))
  }

  
  UserIsAuthenticated() {

    return this.usuarioAuthenticado;

  }

}
