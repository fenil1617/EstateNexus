import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent, FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private _router:Router){}


  submit(){
  this._router.navigate(['/property'])
  }
}
