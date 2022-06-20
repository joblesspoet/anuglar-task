import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Directive({
  selector: '[candada-phone]',
})
export class CanadaPhoneDirective {

  private _phoneControl!: AbstractControl;
  private _preValue: string;

  @Input()
  set phoneControl(control: AbstractControl) {
    this._phoneControl = control;
  }
  @Input()
  set preValue(value: string) {
    this._preValue = value;
  }

  private sub: any;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {

    this._preValue = '';
  }

  ngOnInit() {
    this.phoneValidate();
  }

  /**
   * remove subscription (that is bind with phone control)
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }



  /**
   * This method will validate phone number (as per Canada Phone number)
   * Also it will remove the 01 as starting characters.
   * 
   */

  phoneValidate() {
    this.sub = this._phoneControl.valueChanges.subscribe((data) => {
  
      let initInputValue: string = this._preValue || '';
      var lastChar: string = initInputValue.substr(initInputValue.length - 1);
      // remove all mask characters (keep only numeric)
      var newVal = data.replace(/\D/g, '');

      let start = this.renderer.selectRootElement('#phone').selectionStart;
      let end = this.renderer.selectRootElement('#phone').selectionEnd;

      //when removed value from input
      if (data.length < initInputValue.length) {

        if (initInputValue.length < start) {
          if (lastChar == ')') {
            newVal = newVal.substr(0, newVal.length - 1);
          }
        }
        //if no number then flush
        if (newVal.length == 0) {
          newVal = '';
        } else if (newVal.length <= 3) {
          /**when removing, we change pattern match.
        "otherwise deleting of non-numeric characters is not recognized"*/
          newVal = newVal.replace(/^(\d{0,3})/, '($1');
        } else if (newVal.length <= 6) {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
        } else {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
        }

        this._phoneControl.setValue(newVal, { emitEvent: false });
        //keep cursor the normal position after setting the input above.
        this.renderer.selectRootElement('#phone').setSelectionRange(start, end);
        //when typed value in input
      } else {

        // this.message = 'Typing...'; //Just console
        var removedD = data.charAt(start);
        // don't show braces for empty value
        if (newVal.length == 0) {
          newVal = '';
        }
        // don't show braces for empty groups at the end
        else if (newVal.length <= 3) {
          // restrict 0
          if (newVal.length == 1 && newVal.match(/^[01]+$/g)) {
            newVal = '';
          } else {
            newVal = newVal.replace(/^(\d{0,3})/, '($1)');
          }
        } else if (newVal.length <= 6) {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
        } else {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
        }
        //check typing whether in middle or not
        //in the following case, you are typing in the middle
        if (initInputValue.length >= start) {
          //change cursor according to special chars.
          // console.log(start+removedD);
          if (removedD == '(') {
            start = start + 1;
            end = end + 1;
          }
          if (removedD == ')') {
            start = start + 2; // +2 so there is also space char after ')'.
            end = end + 2;
          }
          if (removedD == '-') {
            start = start + 1;
            end = end + 1;
          }
          if (removedD == ' ') {
            start = start + 1;
            end = end + 1;
          }
          this._phoneControl.setValue(newVal, { emitEvent: false });
          this.renderer.selectRootElement('#phone').setSelectionRange(start, end);
        } else {
          this._phoneControl.setValue(newVal, { emitEvent: false });
          this.renderer
            .selectRootElement('#phone')
            .setSelectionRange(start + 2, end + 2); // +2 because of wanting standard typing
        }
      }
    });
  }
}
