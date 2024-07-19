import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form: UntypedFormGroup;
  stateListGGG = [];
  stateList = [
    {
      id: 1,
      name: 'india',
      states: [
        { id: 1, name: 'up' },
        { id: 2, name: 'delhi' },
        { id: 3, name: 'bihar' },
      ],
    },
    {
      id: 2,
      name: 'USA',
      states: [
        { id: 1, name: 'California' },
        { id: 2, name: 'new jesry' },
        { id: 3, name: 'bihar' },
      ],
    },
  ];
  countryList = [
    {
      id: 1,
      name: 'india',
      states: [
        { id: 1, name: 'up' },
        { id: 2, name: 'delhi' },
        { id: 3, name: 'bihar' },
      ],
    },
    {
      id: 2,
      name: 'USA',
      states: [
        { id: 1, name: 'California' },
        { id: 2, name: 'new jesry' },
        { id: 3, name: 'bihar' },
      ],
    },
  ];

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      countries: this.fb.array([]),
    });
  }

  addCreds() {
    const creds = this.form.controls['countries'] as UntypedFormArray;
    creds.push(
      this.fb.group({
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
      })
    );
  }

  getData(event:any) {
    let data = this.stateList.find((r) => r.id == event);
  }

  returnStates(id:any) {
    let cunt = this.countryList.find((r) => r.id == id);
    console.log(id);
    return 
  }
}
