import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../interface/user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  LoginForm: UntypedFormGroup;
  userList: User[] = [];
  isError: boolean = false;
  constructor(
    private _services: UserService,
    private _fb: UntypedFormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.LoginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.getData();
  }

  get f(): any {
    return this.LoginForm.controls;
  }

  getData() {
    this.userList = JSON.parse(localStorage.getItem('user') || '[]');
  }

  Submit():any {
    const {email,password} = this.LoginForm.value;
    const user = this.userList.find(x=>x.email === email && x.password === password);
    if(!user) {
      this.isError = true;
      return('username or password is not valid!!')
    }

    this._router.navigate(['/home'])
  }
}
