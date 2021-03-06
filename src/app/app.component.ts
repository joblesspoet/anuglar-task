import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
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
