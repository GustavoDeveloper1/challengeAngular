import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submited: boolean = false;

  user: User = new User()
  msg: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [null, Validators.required],
      password: [null, Validators.required,]
    })
  }
  onSubmit(formulario: any) {
    this.user = formulario.value

    console.log(" este é o usuario = ", this.user)

    this.authService.Authlogin(this.user)

    this.msg = this.authService.ErrorEnter


  }


}
