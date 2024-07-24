import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {

}
