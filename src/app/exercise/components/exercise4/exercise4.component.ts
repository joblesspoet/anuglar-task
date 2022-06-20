import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {

  testForm: FormGroup;
  constructor() {

    this.testForm = new FormGroup({
      'email': new FormControl('abc@gmail.com'),
    })
  }

  ngOnInit(): void {
  }

  /**
   * 
   */
  onFormSubmit(): void{
    console.log('called on submit.')
  }

}
