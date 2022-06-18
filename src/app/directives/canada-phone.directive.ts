import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appCanadaPhone]',
})
export class CanadaPhoneDirective {
  // @Input() dirInput: string;

  constructor(private eRef: ElementRef) {
    console.log('called')
    // this.eRef.nativeElement.style.backgroundColor= 'red';
    this.eRef.nativeElement.style.backgroundColor = 'yellow';
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.eRef.nativeElement.style.backgroundColor = 'red';
  }

  // @HostListener('input', ['$event'])
  // onInputChange(event: any) {
  //   console.log(event)
  //   const initalValue = this.eRef.nativeElement.value;
  //   console.log(initalValue);
  //   // this.eRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
  //   // if (initalValue !== this.eRef.nativeElement.value) {
  //   //   event.stopPropagation();
  //   // }
  // }
}
