import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeloDirective]'
})
export class HeloDirectiveDirective {

  constructor(private eRef: ElementRef, private renderer: Renderer2) {
    console.log('called')
  }

  ngOnInit() {
    console.log('hello')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.eRef.nativeElement, 'background-color',color)
  }

}
