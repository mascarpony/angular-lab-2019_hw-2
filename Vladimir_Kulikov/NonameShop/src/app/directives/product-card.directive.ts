import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('mouseenter', ['$event'])
  onMouseOver(e: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
  }

}
