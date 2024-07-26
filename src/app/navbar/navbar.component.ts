import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatButtonModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  
  
  
  constructor(private _router: Router,private _service:UserService) {}

  submit() {
    this._router.navigate(['/property']);
  }

  logout(){
    this._service.logout()
  }
}
