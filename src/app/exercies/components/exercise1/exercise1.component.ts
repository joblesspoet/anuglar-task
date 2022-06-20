import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
})
export class Exercise1Component {
  phoneForm: FormGroup;

  constructor() {
    this.phoneForm = new FormGroup({
      phone: new FormControl(null, Validators.compose([Validators.required, Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)])),
    });

    console.log(this.phoneForm);
  }

}
