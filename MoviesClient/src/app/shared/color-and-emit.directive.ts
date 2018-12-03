import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorAndEmit]'
})
export class ColorAndEmitDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'blue';
    this.element.nativeElement.style.cursor = 'pointer'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.cursor = 'auto'
  }

  @HostListener('click') onMouseClik(){
    let text = this.element.nativeElement.innerHTML;
    console.log("Link ", text , " has been clicked.")
  }

}
