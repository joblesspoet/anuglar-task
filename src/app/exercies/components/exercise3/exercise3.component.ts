import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {

  inputCounter: number;
  @Output('ngModelChange') updatedValue = new EventEmitter();

  constructor() {
    this.inputCounter = 0;
  }

  ngOnInit(): void {

  }


  /**
   * change detection event.
   * @param newValue string vlaue returnes on change
   */
  changeMyValue(newValue: any): void {

    if (this.inputCounter != newValue) {
      this.inputCounter = newValue;
      this.updatedValue.emit(newValue);
      console.log(`Value has changed to: ${newValue}`);
    }

  }



}
