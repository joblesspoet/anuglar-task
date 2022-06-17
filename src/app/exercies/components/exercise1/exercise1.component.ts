import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  title = 'helloWorld';

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
