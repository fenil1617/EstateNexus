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
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  signUpForm: UntypedFormGroup;
  userList: any[] = [];
  id: number = 1;
  token: any;
  constructor(private _fb: UntypedFormBuilder,private route: Router, private _service: UserService) {}

  ngOnInit(): void {
    this.signUpForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.getData();
  }

  get f(): any {
    return this.signUpForm.controls;
  }

  getData() {
    this._service.signup().subscribe((data: User[]) => {
      this.userList = data;
      localStorage.setItem('user',JSON.stringify(data))
      localStorage.setItem('id',JSON.stringify({id:this.id}))
    });
  }


  onSubmit() {
    if(this.signUpForm.invalid){
      return
    }

    const data = this.userList
    if(data) {
      Object.assign(this.signUpForm.value,{id:this.id + 1 ,token:this.signUpForm.value.firstname + this.signUpForm.value.lastname})
      this.userList.push(this.signUpForm.value)
      localStorage.setItem('user',JSON.stringify(this.userList))
      localStorage.setItem('token',JSON.stringify(this.signUpForm.value.token))
      this.route.navigate(['/login'])
    }
  }
}
