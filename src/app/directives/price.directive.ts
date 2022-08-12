import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrice]',
})
export class PriceDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    const element = this.elementRef.nativeElement;

    this.renderer.setStyle(element, 'color', 'red');

    const small = this.renderer.createElement('small');
    const smallContent = this.renderer.createText('$');

    this.renderer.appendChild(small, smallContent);
    this.renderer.appendChild(element, small);
  }
}
